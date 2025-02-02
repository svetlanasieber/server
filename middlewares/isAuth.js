export default (req, res, next) => {
    if (!res.locals.user) return res.redirect('/auth/login');
    next();
}
