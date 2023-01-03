const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const authorize = require('./authorize');

const router = Router();

router
    .get(
        '/pessoas',
        authorize('master'),
        PessoaController.retornaTodasAsPessoas,
    )
    .get(
        '/pessoas/:id',
        authorize('master'),
        PessoaController.retornaPessoaPorId,
    )
    .post('/pessoas', authorize('master'), PessoaController.criaPessoa)
    .put('/pessoas/:id', authorize('master'), PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', authorize('master'), PessoaController.excluiPessoa);

module.exports = router;
