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
                    // console.log(datos.dataValues); //-------------A MIRAR
                    req.session.user = datos.dataValues; // A CORREGIR ----------------------------------------
                    console.log(req.session.user)
                })
                .catch(function(error){
                    res.send(error);
                })  
                return res.redirect('/');         
             
                
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

         let errors = validationResult(req);
         let { email, password, remember } = req.body;
         if (errors.isEmpty()) {
             let userLoginIn;

             users.forEach(user => {
                 if (user.email == email){    
                     if(bcrypt.compareSync(password, user.password)) {
                         userLoginIn = user;  
                     }
                 }
             });

             if (userLoginIn == undefined) {
                 return res.render('users/login',
                 {noCoincidence:[
                 {msg:'El email o la contraseña son incorrectas'}]});
                

            } 

             req.session.user = userLoginIn;

             if (remember != undefined) {
                 res.cookie('remember', userLoginIn.email, { maxAge: 60000 });
             }
             return res.redirect('/');

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
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,12),
                admin:1
            },{
                where:{
                    id:req.params.id
                }
            })
            .then(function(datos){
                console.log(datos); //-------------A MIRAR
                req.session.user = datos; // A CORREGIR ----------------------------------------
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