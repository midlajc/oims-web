import axios from "axios";
import tokenService from "./tokenService";
const instance = axios.create({
    baseURL: "http://18.223.21.102/",
    headers: {
        "Content-Type": "application/json",
    },
});
instance.interceptors.request.use(
    (config) => {
        const token = tokenService.getLocalAccessToken();
        const username = tokenService.getUserName();
        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
            config.headers["username"] = username;
            // config.headers["x-access-token"] = token; // for Node.js Express back-end
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        let originalConfig = err.config;
        if (originalConfig === undefined)
            originalConfig={url : ''}
        if (originalConfig.url !== "/auth/login" && err.response) {
            // Access Token was expired
            if (err.response.status === 403 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await instance.post("/auth/token", {
                        refreshToken: tokenService.getLocalRefreshToken(),
                    }, {
                        username: tokenService.getUserName()
                    });
                    const { accessToken } = rs.data;
                    tokenService.updateLocalAccessToken(accessToken);
                    return instance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);
export default instance;