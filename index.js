var express = require('express');
var exphbs  = require('express-handlebars');
var router = require('./src/routes').router;
var path = require('path');
var app = express();

app.set('views', 'src/views');
app.engine('handlebars', exphbs({layoutsDir: 'src/views/layouts',defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(3000);
