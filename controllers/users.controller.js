const { response } = require('express');

const usersGet = (req, res = response) => {
    const query = req.query;
    res.status(200).json({                
        msg: 'get API - Controlador',
        query
    });
}

const usersPost = (req, res = response) => {    
    const {nombre , edad} = req.body;

    res.status(200).json({                
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usersPut = (req, res = response) => {
    const { id } = req.params;
    res.status(200).json({                
        msg: 'put API - Controlador',
        id
    });
}

const usersPatch = (req, res = response) => {
    res.status(200).json({                
        msg: 'path API - Controlador'
    });
}

const usersDelete = (req, res = response) => {
    res.status(402003).json({                
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}