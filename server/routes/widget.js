const express = require('express');
const router = express.Router();
const WidgetController = require('../controllers/widget');

router.get('/', WidgetController.index);
// router.post('/', WidgetController.create);
// router.get('/:id', WidgetController.show);
// router.put('/:id', WidgetController.update);
// router.delete('/:id', WidgetController.destroy);

module.exports = router;