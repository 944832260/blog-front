import axios from "axios";
import { message } from "antd"

let token = ''
axios.interceptors.request.use(
	config => {
		let user = window.localStorage.getItem('PATENT_TOKEN')
		if (user) {
			token = user;
			// 携带token传输
			config.headers['Authorization'] = "Bearer " + token;
		}
		return config;
	},
	error => {
		return Promise.reject(error.response);
	}
);


// http response 拦截器
axios.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return Promise.reject(error.response)
	}
);
