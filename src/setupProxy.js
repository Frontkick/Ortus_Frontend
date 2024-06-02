const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cold-zaria-suckyou-eb2c31ea.koyeb.app', // Replace with your backend API URL
      changeOrigin: true,
      secure: false,
      headers: {
        'Access-Control-Allow-Origin': '*', // Set appropriate CORS headers
        // Add other CORS headers if necessary
      },
    })
  );
};
