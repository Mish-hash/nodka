let users = [
    {
        id: 1,
        name: 'Vasya'
    },
    {
        id: 2,
        name: 'Kolya'
    },
    {
        id: 3,
        name: 'Petya'
    },
    {
        id: 4,
        name: 'HerPojmiKto'
    }
]


function getAllUsers(req, res) {
    const {fieldName, value} = req.query;
   
    const filteredUsers = users.filter((item) => item[fieldName] === value );

    res.send(filteredUsers);
}

function getUserById(req, res) {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    res.send(user);
}

function createUser(req, res) {
    const body = req.body;
    users.push(body);
    res.send(body);
}

function updateUser(req, res) {
    console.log(req.headers.authorization)
    res.send('put user');
}

function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    users = users.filter((item) => item.id === id);
    res.send(id);
}

//CRUD

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
