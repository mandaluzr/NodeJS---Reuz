const notificationModel = require('./notifications.model');

const getAll = async (req, res) => {
    const notifications = await notificationModel.all();
    return res.status(200).json(notifications);
  };
  
  const getOne = async (req, res) => {
    const notification = await notificationModel.get(req.params.id);
    if (notification) {
      return res.status(200).json(notification);
    }
    return res.status(404).end();
  };
  
  const create = (req, res) => {
    const newnotification = req.body;
    const notificationsUpdated = notificationModel.create(newnotification);
    return res.status(201).json(notificationsUpdated);
  };
  
  const update = (req, res) => {
    const updatednotification = req.body;
    const notificationsUpdated = notificationModel.update(req.params.id, updatednotification);
    return res.status(200).json(notificationsUpdated);
  };
  
  const remove = (req, res) => {
    const notificationsWithoutTheDeleted = notificationModel.remove(req.params.id);
    return res.status(200).json(notificationsWithoutTheDeleted);
  };
  
  module.exports = {
    create,
    update,
    getAll,
    getOne,
    remove,
  };