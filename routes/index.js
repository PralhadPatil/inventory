var express = require('express');
var router = express.Router();
var model = require("../module/model");
/* GET home page. */
router.get('/', function(req, res, next) {
  let itemsList = model.getItems();
  
  res.render('index', { title: 'Inventory System',itemsList:itemsList.items });
});

module.exports = router;
