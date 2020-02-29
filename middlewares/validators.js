
function validateParams(validateScheme) {
    return function(req, res, next) {
        validateScheme.validate(parseInt(req.params.id))
            .then(() => next())
            .catch(next)
    };
};

function validateBody(validateScheme) {
    return function(req, res, next) {
        validateScheme.validate(req.body)
            .then(() => next())
            .catch((err) => next(err))
            //.catch(next) --- аналог предыдущей строки
    };
};

module.exports = {
    validateParams,
    validateBody,
}
