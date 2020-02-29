const yup = require('yup');
const PHONE_REG = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/
const PASSWORD_REG = /^\S/
const {ROLES} = require('../utils/constants');

const paramsScheme = yup.number().positive().integer();

const createUserBodyScheme = yup.object().shape({
    phone: yup.string().required().matches(PHONE_REG, {message:'you shoul use this pattern +380999999999'}),
    email: yup.string().required().email('Invalid email address'),
    password: yup.string().required().min(6, 'password should be min lenght 6')
        .matches(PASSWORD_REG, 'password cannot contain spaces'),
    role: yup.mixed().required().oneOf(ROLES, 'Role must be one of' + JSON.stringify(ROLES)),
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    photoUrl: yup.string().url('photo url should br url'),
    birthDate: yup.date('Should be date type').required(),
});

module.exports = {
    paramsScheme,
    createUserBodyScheme,
};


