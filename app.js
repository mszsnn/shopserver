var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyparser=require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var session=require('express-session');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));






app.use(session({
    secret:'name',
    resave:true,
    saveUninitialized:true
}));



// index
// admin
//
// 登录  /login
// 商品类型  /goods
// 购物车  /car

let login=require('./routes/admin/login');
let goods=require('./routes/admin/goods');
let car=require('./routes/admin/car');

app.use('admin/login',login);
app.use('admin/goods',goods);


app.get("*",function(req,res){
    res.send('ok');
})





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


var post=8000;
app.listen(8000,function(){
    console.log('ok');
})
