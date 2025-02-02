export default (err, req, res, next) => {
    const error = {};
    error.msg = err.message || err.msg || 'Something went wrong';
    error.status = err.status || 500;
    req.session.err = error;
    res.redirect('/500');
}
