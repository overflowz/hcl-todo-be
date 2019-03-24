module.exports = {
  server: {
    port: process.env.HTTP_PORT || 8080,
    enableCors: true, // for testing, no env.
  },
};
