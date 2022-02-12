const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;
};
const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken;
};
const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("user"));
    user.accessToken = token;
    localStorage.setItem("user", JSON.stringify(user));
};
const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
const setUser = (user) => {
    // console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
};
const removeUser = () => {
    localStorage.removeItem("user");
};
const getUserName = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.username
}
const tokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
    getUserName,
};
export default tokenService;