const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router
    .get('/users', UserController.retornaUsuarios)
    .post('/users', UserController.criaUsuario)
    .post('/users/login', UserController.login)
    .put('/users/:id', UserController.atualizaSenha);

module.exports = router;
