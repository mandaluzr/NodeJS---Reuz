const tagModel = require('./tags.model');

const getAll = async (req, res) => {
    const tags = await tagModel.all();
    return res.status(200).json(tags);
  };
  
  const getOne = async (req, res) => {
    const tag = await tagModel.get(req.params.id);
    if (tag) {
      return res.status(200).json(tag);
    }
    return res.status(404).end();
  };
  
  const create = (req, res) => {
    const newtag = req.body;
    const tagsUpdated = tagModel.create(newtag);
    return res.status(201).json(tagsUpdated);
  };
  
  const update = (req, res) => {
    const updatedtag = req.body;
    const tagsUpdated = tagModel.update(req.params.id, updatedtag);
    return res.status(200).json(tagsUpdated);
  };
  
  const remove = (req, res) => {
    const tagsWithoutTheDeleted = tagModel.remove(req.params.id);
    return res.status(200).json(tagsWithoutTheDeleted);
  };
  
  module.exports = {
    create,
    update,
    getAll,
    getOne,
    remove,
  };