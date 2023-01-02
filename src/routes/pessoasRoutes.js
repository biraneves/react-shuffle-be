const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
    .get('/pessoas', PessoaController.retornaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.retornaPessoaPorId)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.excluiPessoa);

module.exports = router;
