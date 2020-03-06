
function handlingErr (err, res) {
    switch(err.path) {
        case "phone":
            if (err.type === 'required') return res.status(406).send('Not Acceptable: ' + err.message);
            if (err.type === 'matches') return res.status(415).send('Unsupported Media Type: ' + err.message);
            else return res.status(400).send('Bad Request');
        case "email":
            if (err.type === 'required') return res.status(406).send('Not Acceptable: ' + err.message);
            if (err.type === 'email') return res.status(415).send('Unsupported Media Type: ' + err.message);
            else return res.status(400).send('Bad Request');
        case "password":
            if (err.type === 'required') return res.status(406).send('Not Acceptable: ' + err.message);
            if (err.type === 'min') return res.status(415).send('Unsupported Media Type: ' + err.message);
            if (err.type === 'matches') return res.status(415).send('Unsupported Media Type: ' + err.message);
            else return res.status(400).send('Bad Request');
        case "role":
            if (err.type === 'required') return res.status(406).send('Not Acceptable: ' + err.message);
            if (err.type === 'oneOf') return res.status(415).send('Unsupported Media Type: ' + err.message);
            else return res.status(400).send('Bad Request');
        case "firstName":
            if (err.type === 'required') return res.status(406).send('Not Acceptable: ' + err.message);
            else return res.status(400).send('Bad Request');
        case "lastName":
            if (err.type === 'required') return res.status(406).send('Not Acceptable: ' + err.message);
            else return res.status(400).send('Bad Request');
        case "photoUrl":
            return res.status(415).send('Unsupported Media Type: ' + err.message);
        case "birthDate":
            return res.status(415).send('Unsupported Media Type: ' + err.message);
    }
    if (err == 'Error: Email or password is invalid') return res.status(401).send('Unauthorized ' + err);
    else res.status(400).send('Bad Request ' + err);
}

module.exports = handlingErr
