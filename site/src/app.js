const express = require ('express');
const app = express();
const path = require ('path');
const methodOverride = require ('method-override');

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

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

//RUTAS
app.use('/', mainRouter)
app.use('/users', usersRouter);
app.use('/products', productsRouter);

//PUERTOS
app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})