const mongoose = require('mongoose');

// Define model schema
const tagModelSchema = mongoose.Schema({
    name:String,
    products_id: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductModel',
      }
    ],
  });

  // Compile model from schema
const Tag = mongoose.model('TagModel', tagModelSchema);

const create = (tag) => {
  Tag.create(tag, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAll = async () => {
  return await Tag.find();
};

const getOne = async (id) => {
  let query = { _id: id };
  return await Tag.findOne(query);
};

const update = (id, updatedtag) => {
  let query = { _id: id };
  Tag.updateOne(query, updatedtag, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const remove = (id) => {
  let query = { _id: id };
  Tag.deleteOne(query, function (err, docs) {
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