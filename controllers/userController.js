
function getAllUsers(req, res) {
    const query = req.query;
    console.log(query);
    res.send(query);
}

function getUserById(req, res) {
    const id = req.params.id;
    res.send(`get ${id} user`);
}

function createUser(req, res) {
    const body = req.body;
    console.log(body);
    res.send(body);
}

function updateUser(req, res) {
    console.log(req.headers.authorization)
    res.send('put user');
}

function deleteUser(req, res) {
    res.send('delete user');
}

//CRUD

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
