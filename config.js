const proxy = [
	{ path: ['/api/v1/user'], target: 'http://192.168.11.193:9999' }, // 自己
];


module.exports = {
	ip: "0.0.0.0",
	port: 3009,
	proxy
};
