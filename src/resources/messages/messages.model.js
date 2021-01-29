const mongoose = require('mongoose');

// Define model schema 1/2
const messageModelSchema = mongoose.Schema({
  subject:String,
  message:String,
  sender_users_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  receiver_users_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  },
});

// Compile model from schema 1/2
const Message = mongoose.model('MessageModel', messageModelSchema);

// Define model schema 2/2
const threadmessageModelSchema = mongoose.Schema({
  message:String,
  messages_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MessageModel',
  },
});  

  // Compile model from schema 2/2
const Threadmessage = mongoose.model('ThreadmessageModel', threadmessageModelSchema);

//Messages's methods
const createMessage = (message) => {
  Message.create(message, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAllMessages = async () => {
  return await Message.find();
};

const getOneMessage = async (id) => {
  let query = { _id: id };
  return await Message.findOne(query);
};

const updateMessage = (id, updatedmessage) => {
  let query = { _id: id };
  Message.updateOne(query, updatedmessage, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const removeMessage = (id) => {
  let query = { _id: id };
  Message.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
};

//Threadmessages's methods
const createThreadmessage = (message) => {
  Threadmessage.create(message, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAllThreadmessages = async () => {
  return await Threadmessage.find();
};

const getOneThreadmessage = async (id) => {
  let query = { _id: id };
  return await Threadmessage.findOne(query);
};

const updateThreadmessage = (id, updatedmessage) => {
  let query = { _id: id };
  Message.updateOne(query, updatedmessage, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const removeThreadmessage = (id) => {
  let query = { _id: id };
  Message.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Deleted Doc : ', docs);
    }
  });
};

module.exports = {
  createMessage,
  getAllMessages,
  getOneMessage,
  updateMessage,
  removeMessage,
  createThreadmessage,
  getAllThreadmessages,
  getOneThreadmessage,
  updateThreadmessage,
  removeThreadmessage,
};