
function validateParams(validateScheme) {
    return function(req, res, next) {
        validateScheme.validate(parseInt(req.params.id))
            .then(() => next())
            .catch(() => res.sendStatus(400))
    };
};

function validateBody(validateScheme) {
    return function(req, res, next) {
        validateScheme.validate(req.body)
            .then(() => next())
            .catch(() => res.sendStatus(400))
    };
};

module.exports = {
    validateParams,
    validateBody,
}
