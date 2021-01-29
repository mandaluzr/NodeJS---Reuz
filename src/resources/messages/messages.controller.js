const messageModel = require('./messages.model');

//Messages
const getAllMessages = async (req, res) => {
    const messages = await messageModel.all();
    return res.status(200).json(messages);
  };
  
  const getOneMessage = async (req, res) => {
    const message = await messageModel.get(req.params.id);
    if (message) {
      return res.status(200).json(message);
    }
    return res.status(404).end();
  };
  
  
  const createMessage = (req, res) => {
    const newmessage = req.body;
    const messagesUpdated = messageModel.create(newmessage);
    return res.status(201).json(messagesUpdated);
  };
  
  const updateMessage = (req, res) => {
    const updatedmessage = req.body;
    const messagesUpdated = messageModel.update(req.params.id, updatedmessage);
    return res.status(200).json(messagesUpdated);
  };
  
  const removeMessage = (req, res) => {
    const messagesWithoutTheDeleted = messageModel.remove(req.params.id);
    return res.status(200).json(messagesWithoutTheDeleted);
  };

  //Threadmessages
  const getAllThreadmessages = async (req, res) => {
    const messages = await messageModel.all();
    return res.status(200).json(messages);
  };

  const getAllThreadmessagesByMessage = async (req, res) => {
    const threadmessages = await threadmessageModel.getAllThreadmessagesByMessage(req.params.id);
    return res.status(200).json(threadmessages);
  };
  
  const getOneThreadmessage = async (req, res) => {
    const message = await messageModel.get(req.params.id);
    if (message) {
      return res.status(200).json(message);
    }
    return res.status(404).end();
  };
  
  
  const createThreadmessage = (req, res) => {
    const newmessage = req.body;
    const messagesUpdated = messageModel.create(newmessage);
    return res.status(201).json(messagesUpdated);
  };
  
  const updateThreadmessage = (req, res) => {
    const updatedmessage = req.body;
    const messagesUpdated = messageModel.update(req.params.id, updatedmessage);
    return res.status(200).json(messagesUpdated);
  };
  
  const removeThreadmessage = (req, res) => {
    const messagesWithoutTheDeleted = messageModel.remove(req.params.id);
    return res.status(200).json(messagesWithoutTheDeleted);
  };
  
  module.exports = {
    createMessage,
    updateMessage,
    getAllMessages,
    getOneMessage,
    removeMessage,
    createThreadmessage,
    updateThreadmessage,
    getAllThreadmessages,
    getAllThreadmessagesByMessage,
    getOneThreadmessage,
    removeThreadmessage,
  };