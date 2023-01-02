const { Router } = require('express');
const RitualController = require('../controllers/RitualController');

const router = Router();

router
    .get('/rituais', RitualController.retornaTodosOsRituais)
    .get('/rituais/:id', RitualController.retornaRitualPorId)
    .post('/rituais', RitualController.criaRitual)
    .put('/rituais/:id', RitualController.atualizaRitual)
    .delete('/rituais/:id', RitualController.excluiRitual);

module.exports = router;
