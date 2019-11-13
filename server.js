var express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
var orm =  require("./config/orm")  
const bodyParser = require("body-parser");

 
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));


var hbs = exphbs.create({
    helpers: {
        devour: orm.devour
    }
});
 
 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const publicPath = path.join(__dirname, './views');
app.use('/', express.static(publicPath));
    
app.get('/', function (req, res) {
    showburgers = function(results){
        res.render('index',{
            burgerList: results
        });
    }
    orm.select(showburgers)
});

app.post("/submit",function (req, res) {

    var burger = req.body.BurgerName

    console.log (burger) 

    orm.insert (burger)
    
    showburgers = function(results){
        res.render('index',{
            burgerList: results
        });
    }
    orm.select(showburgers)

});

app.post("/click",function (req, res) {

    var burger_id = req.body.id

    orm.devour (burger_id)
    
    showburgers = function(results){
        res.render('index',{
            burgerList: results
        });
    }
    orm.select(showburgers)

});

app.listen(8080);

