import config from '../config/config.js';
import jwt from 'jsonwebtoken';

const COOKIE_NAME = config.COOKIE_NAME;
const SECRET = config.SECRET;

export default function () {
    return (req, res, next) => {
        const token = req.cookies[COOKIE_NAME];
        if (token) {
            jwt.verify(token, SECRET, (e, x) => {
                if (e || !x._id) return res.clearCookie(COOKIE_NAME);
                res.locals.user = x;
            });
        }
        next();
    }
}