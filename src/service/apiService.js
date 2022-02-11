import axios from "axios";
import authHeader from "./authHeader";

const { API_URL } = require('./api');

const getAllPublicPosts = () => {
    return axios.get(API_URL + "/public");
};

const test = () => {
    return axios.get(API_URL + "/", {
        headers: authHeader()
    });
};

const postService = {
    getAllPublicPosts,
    test,
};

export default postService;
