var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article-controller')

/* GET users listing. */
router.get('/', articleController.getData)
router.post('/', articleController.postData)
router.get('/:id', articleController.getOneData)
router.get('/category/:category', articleController.getCategory)
router.delete('/delete/:id', articleController.removeOne)
router.put('/update/:id', articleController.updateOne)



module.exports = router;
