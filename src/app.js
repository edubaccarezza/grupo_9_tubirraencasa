const express = require ('express');
const app = express();
const path = require ('path');
const methodOverride = require ('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const rememberMiddleware = require('./middlewares/rememberMiddleware');
const sesionIniciadaMiddleware = require('./middlewares/sesionIniciada');

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const adminRouter = require('./routes/admin');

//EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//OVERRIDE
app.use(methodOverride('_method'));

//PUBLIC
app.use(express.static(path.join(__dirname, '../public')))

//
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(rememberMiddleware);
app.use(cookieParser());
app.use(session( { secret: 'laBirra' } ));
app.use(sesionIniciadaMiddleware);

//RUTAS
app.use('/', mainRouter)
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/admin', adminRouter);

//PUERTOS
app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})