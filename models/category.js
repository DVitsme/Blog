const mongoose = require('mongoose');

//category schema
const categorySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});

//allows access of schema outside of file
const Category = module.exports = mongoose.model('Category', categorySchema);

//Get Categories
module.exports.getCategories = (callback, limit) => {
  Category.find(callback).limit(limit).sort([['title', 'ascending']]);
};

//Add Category
module.exports.addCategory = function (category, callback) {
  // body...
  Category.create(category, callback);
};

//get single category by id
module.exports.getCategoryById = (id, callback) => {
  Category.findById(id, callback);
};

//Up date Category
module.exports.updateCategory = (query, update, options, callback) => {
  Category.findOneAndUpdate(query, update, options, callback);
};

//Remove Catagory
module.exports.removeCategory = (query, callback) => {
  Category.remove(query, callback);
};
