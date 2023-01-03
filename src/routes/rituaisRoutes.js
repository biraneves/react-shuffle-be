const { Router } = require('express');
const RitualController = require('../controllers/RitualController');
const authorize = require('./authorize');

const router = Router();

router
    .get(
        '/rituais',
        authorize('master'),
        RitualController.retornaTodosOsRituais,
    )
    .get(
        '/rituais/:id',
        authorize('master'),
        RitualController.retornaRitualPorId,
    )
    .post('/rituais', authorize('master'), RitualController.criaRitual)
    .put('/rituais/:id', authorize('master'), RitualController.atualizaRitual)
    .delete('/rituais/:id', authorize('master'), RitualController.excluiRitual);

module.exports = router;
