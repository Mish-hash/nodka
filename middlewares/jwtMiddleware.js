const jwt = require('jsonwebtoken');

async function checkJwt(req, res, next) {
    const authHeader = req.headers['authorization'];
    if(!authHeader) {
        return next(new Error('Token is requred'))
    }
    const [keyword, token] = authHeader.split(' ');
    if (keyword !== 'Bearer') {
        return next(new Error('Invalid token signature'));
    }
    try {
    const decoded = await jwt.verify(token, 'my secret key');
    req.userId = decoded.id;
    next();
    } catch (e) {
        console.log(e);
        next(e);
    }
    
}

module.exports = {
    checkJwt,
};
