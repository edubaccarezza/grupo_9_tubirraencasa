module.exports = (req, res, next) => {
    if (req.session.user != undefined && req.session.user.email == "admin@gmail.com") {
        return next();
    } else {
        res.send ('No estas logueado')
    }
    return res.redirect('/');
}