module.exports = (req, res, next) => {
    if (req.session.user != undefined && req.session.user.admin == 1) {
        return next();
    } else {
        return res.redirect('/')
    }
}