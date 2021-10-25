
const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users.routes');
const productRouter = require("./routes/product.routes.js")
const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// EN 1er Creation des routes voir la suite dans le dossier routes/fichiers Users.js 
app.use('/product', productRouter);
app.use('/users', usersRouter);



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
  res.render('error');
});


// Lancer le serveur sur localhost 4000
app.listen(4000, () => {
  console.log("Listening on port" + 4000 );
})




module.exports = app;
