const fs = require('fs');
const path = require ('path');

// let users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');
// users = JSON.parse(users);

function rememberMiddleware (req, res, next) {
    next();

    if (req.cookies.remember != undefined && req.session.user == undefined) {
        //req.session.user = req.cookies.remember;
        let userLoginIn;

        for(let i=0; i<users.length; i++) {
            if (users.email == req.cookies.remember){    
                
                userLoginIn = users;
                break;
                    
            }
        }

        req.session.user = userLoginIn;

    }

}


module.exports = rememberMiddleware;