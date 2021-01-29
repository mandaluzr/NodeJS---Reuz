const { Router } = require('express');
const tagsController = require('./tags.controller');
const router = Router();

router.route('/').get(tagsController.getAll).post(tagsController.create);

router
  .route('/:id')
  .get(tagsController.getOne)
  .put(tagsController.update)
  .delete(tagsController.remove);

module.exports = router;