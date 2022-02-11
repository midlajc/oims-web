import axios from "axios";

import { API_URL } from './api'

const signup = (email, password) => {
    return axios
        .post(API_URL + "/signup", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post(API_URL + "/auth/login", {
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
            reject(err.response)
        });
    })
};

const logout = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    axios.post(API_URL + "/auth/logout", {
        username: user.username,
        refreshToken: user.refreshToken
    }, {
        headers: {
            username: user.username
        }
    }).then(() => {
        localStorage.removeItem("user");
        window.location.reload()
    }).catch(err => {
        console.log(err)
    });
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService;
