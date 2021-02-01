const db = require ('../database/models')

function rememberMiddleware (req, res, next) {
    next();

    if (req.cookies.remember != undefined && req.session.user == undefined) {
        //req.session.user = req.cookies.remember;
        db.Usuarios.findOne({
            where:{
                email:req.cookies.remember
            }
        })
        .then(function(resultado){
            req.session.user=resultado;
        })
        .catch(function(error){
            res.send(error);
        })


    }

}


module.exports = rememberMiddleware;