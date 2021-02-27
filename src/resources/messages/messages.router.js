const { Router } = require('express');
const messagesController = require('./messages.controller');
const router = Router();

router.route('/').get(messagesController.getAllMessages).post(messagesController.createMessage);


router
  .route('/:id')
  .get(messagesController.getOneMessage)
  .put(messagesController.updateMessage)
  .delete(messagesController.removeMessage)

router.route('/threadmessages').post(messagesController.createThreadmessage);
router.route('/:id/threadmessages').get(messagesController.getAllThreadmessagesByMessage);

router
  .route('/:id/threadmessages/:threadmessage_id')
  .get(messagesController.getOneThreadmessage)
  .put(messagesController.updateThreadmessage)
  .delete(messagesController.removeThreadmessage);

  // http://localhost:5000/api/sender/xxxx/messages/yyyyyy/threadmessages
  // http://localhost:5000/api/receiver/xxxx/messages/yyyyyy/threadmessages

module.exports = router;