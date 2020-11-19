const express = require ('express');
const app = express();
const path = require ('path');

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

//Cuchame, Express... Vas a usar de motor de vista EJS...
app.set('view engine', 'ejs');
//Cuchame, Express.. Hay una carpeta que tiene todas las vistas. Es esta...
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')))

app.use('/', mainRouter)
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor está corriendo en el puerto 3000");
    console.log("-------------------");
    console.log("http://localhost:3000");
})