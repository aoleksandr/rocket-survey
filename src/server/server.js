let express = require('express');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpack = require('webpack');
let webpackConfig = require('../../webpack.config');
let api = require('./api');

let app = express();
let compiler = webpack(webpackConfig);

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use('/api/', api);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.get('*', function response(req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
