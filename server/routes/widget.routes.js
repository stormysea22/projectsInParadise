const WidgetController = require('../controllers/widget.controller');

module.exports = (app) => {
    app.get('/api/widgets', WidgetController.index);
    app.post('/api/widgets', WidgetController.create);
    app.get('/api/widgets/:id', WidgetController.show);
    app.put('/api/widgets/:id', WidgetController.update);
    app.delete('/api/widgets/:id', WidgetController.destroy);
};