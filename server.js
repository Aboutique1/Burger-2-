var express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
var orm =  require("./config/orm")   
 
var app = express();

var hbs = exphbs.create({

    
});
 
 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const publicPath = path.join(__dirname, './views');
app.use('/', express.static(publicPath));
    
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(8080);

