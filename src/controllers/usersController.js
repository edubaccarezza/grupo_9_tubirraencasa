const bcrypt = require ('bcrypt');
const {validationResult} = require('express-validator')
const db = require ('../database/models')

 module.exports = {

     register: function(req, res) {
         res.render('users/register')
     }, 

     create: function(req,res){
        
        let errors = validationResult(req)
         if(errors.isEmpty()){
             if(req.body.password==req.body.repassword){
                db.Usuarios.create({
                    nombre:req.body.firstName,
                    apellido:req.body.lastName,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password,12),
                    imagen:req.file.filename,
                    admin: 1
                })
                .then(function(datos){
                    console.log(datos);
                    req.session.user=datos.dataValues;
                    console.log(req.session)
                    res.redirect('/');

                })
                .catch(function(error){
                    res.send(error);
                })          
             
                
             }else{
                  return res.render('users/register',
                     {
                         old:req.body,
                         passError:[
                         {msg:'Las contraseñas no coinciden'}]
                     })
             }
    
            
         } else{

             if(req.body.password==req.body.repassword){
                 return res.render('users/register',{
                     errors:errors.mapped(),
                     old:req.body
                 })
             } else{
                 return res.render('users/register',{
                     errors:errors.mapped(),
                     passError:[
                         {msg:'Las contraseñas no coinciden'}],
                     old:req.body
                 })
             }
         }
     },

     login: function(req, res) {
         res.render('users/login');
     },

     loginIn: function(req,res){

        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.Usuarios.findOne({
                where:{
                    email:req.body.email
                }
            })
            .then(function(resultado){
                if (bcrypt.compareSync(req.body.password,resultado.password)){
                    req.session.user = resultado.dataValues;
                    if (req.body.remember != undefined) {
                        res.cookie('remember', resultado.dataValues.email, { maxAge: 60000 });
                    }
                    return res.redirect('/');
                }
                else{
                    return res.render('users/login',
                    {noCoincidence:[
                    {msg:'El email o la contraseña son incorrectas'}]});
                }
            })
            .catch(function(error){
                res.send(error);
            })   

        } else {           
            return res.render('users/login',
                {
                    errors:errors.mapped(),
                    old:req.body 
                });
            }

     },

     logOut:function(req,res){
         req.session.destroy();
         res.redirect('/');
     },

     edit:function(req,res){
         db.Usuarios.findByPk(req.params.id)
         .then(function(usuario){
            return res.render('users/edit.ejs',{usuario:usuario});
         })
         
     },

     update: function(req,res){
        let errors = validationResult(req)
        if(errors.isEmpty()){
                db.Usuarios.update({
                nombre:req.body.firstName,
                apellido:req.body.lastName,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,12)
            },{
                where:{
                    id:req.params.id
                }
            })
            .then(function(datos){
                console.log(datos); 
                req.session.user = datos; 
            })
            .catch(function(error){
                res.send(error);
            })  
            return res.redirect('/');   

        } else { return res.render('users/register',{
            errors:errors.mapped(),
            old:req.body
            })
        }
        
     },

     delete: function(req,res){
         db.Usuarios.destroy({
             where:{
                 id:req.params.id
             }
         });
         req.session.destroy();
         res.redirect('/');
     }
 }