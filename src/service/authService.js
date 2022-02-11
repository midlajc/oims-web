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
        }).then((response) => {
            console.log(response);
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            resolve(response.data);
        }).catch(err => {
            console.log(err);
            reject(err)
        });
    })
};

const logout = () => {
    localStorage.removeItem("user");
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
