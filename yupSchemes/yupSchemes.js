const yup = require('yup');

const paramsScheme = yup.number().positive().integer();

const createUserBodyScheme = yup.object().shape({
    name: yup.string().required().trim(),
    id: yup.number().required().positive().integer(),

});

module.exports = {
    paramsScheme,
    createUserBodyScheme,
};


