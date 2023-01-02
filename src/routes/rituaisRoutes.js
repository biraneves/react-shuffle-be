const { Router } = require('express');
const RitualController = require('../controllers/RitualController');

const router = Router();

router.get('/rituais', RitualController.retornaTodosOsRituais);

module.exports = router;
