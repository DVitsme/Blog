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
