import axios from "axios";

const BaseUrl = "http://localhost:8080";

const addPost = (requestBody) => {        
    return axios.post(`${BaseUrl}/admin/location`, requestBody);
};

const getPost = () => {        
    return axios.get(`${BaseUrl}/admin/locations`);
};

const deletePost = (id) => {        
    return axios.delete(`${BaseUrl}/admin/location/${id}`);
};

export { addPost , getPost , deletePost };