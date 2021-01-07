const fs = require('fs');
const path = require ('path');
const bcrypt = require ('bcrypt');
const {validationResult} = require('express-validator')

let users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
users = JSON.parse(users);

let ultimoId = 0;
for (let i = 0; i < users.length; i++) {
    if (ultimoId < users[i].id) {
        ultimoId = users[i].id
    }
}

module.exports = {
    register: function(req, res) {
        res.render('users/register')
    }, 
    create: function(req,res){
        let errors = validationResult(req)
        if(errors.isEmpty()){
            if(req.body.password==req.body.repassword){
                    let nuevoUsuario = {
                        id:ultimoId + 1,
                        firstName:req.body.firstName,
                        lastName:req.body.lastName,
                        email:req.body.email,
                        password:bcrypt.hashSync(req.body.password,12),
                        image:req.file.filename
                    }

                    users.push(nuevoUsuario);
                    fs.writeFileSync(path.join(__dirname, '../database/users.json'),JSON.stringify(users, null, 4));
            
                    req.session.user = nuevoUsuario;
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
            }else{
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
    }
}
