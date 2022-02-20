import api from './api'
import storageService from './storageService';

const signup = (email, password) => {
    return api.post("/signup", {
        email,
        password,
    }).then((response) => {
        if (response.data.accessToken) {
            storageService.setUser(response.data)
        }
        return response.data;
    });
};

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        api.post("/auth/login", {
            username,
            password,
        }, {
            headers: {
                username: username
            }
        }).then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            resolve(response.data);
        }).catch(err => {
            console.log(err);
            reject(err.response)
        });
    })
};

const logout = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    api.post("/auth/logout", {
        username: user.username,
        refreshToken: user.refreshToken
    }, {
        headers: {
            username: user.username
        }
    }).then(() => {
        storageService.removeUser()
        window.location.reload()
    }).catch(err => {
        console.log(err)
    });
};

const getCurrentUser = () => {
    return storageService.getUser()
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService;
