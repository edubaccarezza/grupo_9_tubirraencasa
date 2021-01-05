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
        } else{
            res.send(errors.mapped())
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
                if (user.email === email && bcrypt.compareSync(password, user.password)) {
                    userLoginIn = user;
                }
            });

            if (userLoginIn == undefined) {
                return res.send('Credenciales invalidas');
            } 

            req.session.user = userLoginIn;

            if (remember != undefined) {
                res.cookie('remember', userLoginIn.email, { maxAge: 60000 });
            }
            return res.redirect('/');

        } else {
            return res.send(errors.mapped());
        }
    }
}
