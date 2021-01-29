const mongoose = require('mongoose');

// Define model schema
const notificationModelSchema = mongoose.Schema({
    subject:String,
    message:String,
    status:Boolean,
    users_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
    },
  });

  // Compile model from schema
const Notification = mongoose.model('NotificationModel', notificationModelSchema);

const create = (notification) => {
  Notification.create(notification, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAll = async () => {
  return await Notification.find();
};

const getOne = async (id) => {
  let query = { _id: id };
  return await Notification.findOne(query);
};

const update = (id, updatednotification) => {
  let query = { _id: id };
  Notification.updateOne(query, updatednotification, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const remove = (id) => {
  let query = { _id: id };
  Notification.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove
};