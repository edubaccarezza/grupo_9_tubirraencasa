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
            
            // req.session.user = nuevoUsuario;
            return res.redirect('/');
        } else{
            res.send(errors.mapped())
        }
    },
    login: function(req, res) {
        res.render('users/login');
    },
    loginIn: function(req,res){

        for(let i=0; i<users.length;i++){
            if(req.body.email==users[i].email){
               if(bcrypt.compareSync(req.body.password,users[i].password)){
                   return res.redirect('/');
               }
            }
        }
        
        return res.redirect('/users/login');
    }
}
