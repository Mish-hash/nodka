let users = [
    {
        name: 'Vasya',
        id: 1,
    },
    {
        name: 'Kolya',
        id: 2,
    },
    {
        name: 'Petya',
        id: 3,
    },
    {
        name: 'HerPojmiKto',
        id: 4,
    }
]


function getAllUsers(req, res) {
    const {fieldName, value} = req.query;
   
    const filteredUsers = users.filter((item) => item[fieldName] === value );

    res.send(filteredUsers);
}

function getUserById(req, res) {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id == id);
    if(!user) {
        return res.sendStatus(404)
    }
    res.send(user);
}

function createUser(req, res) {
    const body = req.body;
    users.push(body);
    res.send(body);
}

function updateUser(req, res) {
    const id = parseInt(req.params.id);
    const body = req.body;
    users = users.map((item) => {
        if(item.id === id) {
            return {...item, ...body}
        }
        return item
    })
    res.send(body);
}

function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    users = users.filter((item) => item.id !== id);
    res.send('' + id);
}

//CRUD

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
