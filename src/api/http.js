import axios from "axios";

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? "//someproductionurl.com" : "//localhost:8000"
});

export default instance