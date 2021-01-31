const mongoose = require('mongoose');

// Define model schema
const userModelSchema = mongoose.Schema({
    email:String,
    password: String,
    urlImage:String, 
    lastname: String,
    name: String,   
    phone:Number,
    address:String,
    postalcode:String,
  });

  // Compile model from schema
const User = mongoose.model('UserModel', userModelSchema);

const create = (user) => {
  User.create(user, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Created Docs : ', docs);
    }
  });
};

const getAll = async () => {
  return await User.find();
};

const getOne = async (id) => {
  let query = { _id: id };
  return await User.findOne(query);
};

const getByEmail = async (email) => {
  let query = { email: email };
  return await User.findOne(query);
};

const update = (id, updateduser) => {
  let query = { _id: id };
  User.updateOne(query, updateduser, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

const remove = (id) => {
  let query = { _id: id };
  User.deleteOne(query, function (err, docs) {
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
  getByEmail,
  update,
  remove
};