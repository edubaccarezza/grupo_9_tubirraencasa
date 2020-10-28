const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static('./public'))

app.get ('/', function (req,res) {
    res.sendFile(path.join(__dirname, './views/index.html'));
})

app.get ('/producto', function (req,res) {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
})

app.get ('/carrito', function (req,res) {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
})

app.get ('/login', function (req,res) {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.get ('/register', function (req,res) {
    res.sendFile(path.join(__dirname, './views/register.html'));
})

app.listen (3000, function() {
    console.log ("El servidor esta corriendo en el puerto 3000");
})