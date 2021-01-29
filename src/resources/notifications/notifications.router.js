const { Router } = require('express');
const notificationsController = require('./notifications.controller');
const router = Router();

router.route('/').get(notificationsController.getAll).post(notificationsController.create);

router
  .route('/:id')
  .get(notificationsController.getOne)
  .put(notificationsController.update)
  .delete(notificationsController.remove);

module.exports = router;