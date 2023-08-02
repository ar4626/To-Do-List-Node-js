const express = require('express');
const router= express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);
router.post('/add-item',homeController.addItem);
router.post('/deleteItem',homeController.deleteItem);

module.exports =router;