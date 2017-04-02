var express = require('express');
var exphbs  = require('express-handlebars');
var router = require('./src/routes').router;
var path = require('path');
var app = express();
var expressReactHelper = require('express-react-helper');

app.set('views', 'src/views');
app.engine('handlebars', exphbs({layoutsDir: 'src/views/layouts',defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
//Setup react helper
app.use(expressReactHelper.setup());


//Adding to react context
//Method one - Using expressReactHelper
app.use(expressReactHelper.addToReactContext({userName: 'myUserName'}))
//Method two - Manually
app.use(function(req, res, next) {
  req.reactHelperContext.appName = 'React Helper Example';
  next();
})

app.use(router);

app.listen(3000);
