// import express from require('express');
// import morgan from require('morgan');
// import cors from require('cors');
// import { createProxyMiddleware } from 'http-proxy-middleware';

// const HOST = 'localhost';
// const PORT = 5050;
// const TARGET_URL = 'https://server-develop.app';

// const app = express();

// // Logging
// app.use(morgan('[:date[iso]] :method :url :status'));

// app.use(cors());

// // Proxy endpoints
// app.use(
// 	'/',
// 	createProxyMiddleware({
// 		target: TARGET_URL,
// 		changeOrigin: true,
// 	})
// );

// app.listen(PORT, HOST, () => {
// 	console.log(`Proxy started at http://${HOST}:${PORT}`);
// });