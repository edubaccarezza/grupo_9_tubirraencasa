const session = require("express-session");

function sesionIniciada(req,res,next){
    console.log("Hola" + req.session.user)
    if(req.session.user){
        res.locals.hayUnUsuario = req.session.user;
    }
    next();
}

module.exports = sesionIniciada;