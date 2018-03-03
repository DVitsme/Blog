const express = require('express');
const router = express.Router();

router.get('/articles', (req,res,next) => {
  res.render('manage_articles', {title: 'Manage Articles'});
});

router.get('/categories', (req,res,next) => {
  res.render('manage_categories', {title: 'Manage Categories'});
});

router.get('/articles/add', (req,res,next) => {
  res.render('add_article', {title: 'Create Article'});
});

router.get('/categories/add', (req,res,next) => {
  res.render('add_category', {title: 'Create Catagory'});
});

router.get('/articles/edit/:id', (req,res,next) => {
  res.render('edit_articles', {title: 'Edit Articles'});
});

router.get('/categories/edit/id:', (req,res,next) => {
  res.render('edit_category', {title: 'Edit Catagory'});
});




module.exports = router;
