const webpackConfig = require('./webpack.config');
webpackConfig.output.publicPath = "http://localhost:8081/";
module.exports = webpackConfig;

