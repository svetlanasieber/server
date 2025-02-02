import User from '../models/User.js';
import bcrypt from 'bcrypt';
import config from '../config/config.js';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = config.SALT_ROUNDS;
const SECRET = config.SECRET;

const login = ({ username, fullName, password, email }) => User.findOne({ username })
    .then(async x => {
        if (!x) throw { msg: 'User with given username do not exists!' };
        const y = await bcrypt.compare(password, x.password);
        return { x, y };
    }).then(z => {
        if (!z.y) throw { msg: 'Password does not match!' };
        return jwt.sign({ _id: z.x._id, username: z.x.username, email: z.x.email, roles: z.x.roles }, SECRET);
    });

const register = ({ username, fullName, password, email }) => {
    return User.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } })
        .then(x => {
            if (x && email) throw { message: 'User with given email already exists!' };
            return bcrypt.genSalt(SALT_ROUNDS);
        })
        .then(x => { return bcrypt.hash(password, x) })
        .then(x => {
            const user = new User({ username, fullName, password: x, email, roles: ['user'] });
            return user.save();
        })
        .catch(x => {
            let err = {};
            if (!x.errors) {
                err.msg = x.message;
            } else {
                const errors = Object.keys(x.errors).map(y => ({ 'err-msg': x.errors[y].message }));
                Object.keys(x.errors).map(y =>
                    err.msg = err.msg ? `${err.msg}\n${x.errors[y].message}` : x.errors[y].message
                );
            }
            throw err;
        });
};

const getUser = (id) => User.findById(id);

const getUserWithOffersBought = (id) => User.findById(id).populate('offersBought').lean();

export default {
    login,
    register,
    getUser,
    getUserWithOffersBought
}