import axios from "axios";

const instance = axios.create({
	baseURL: process.env.NODE_ENV === "production" ? "//someproductionurl.com" : "//localhost:5000"
});

export default instance