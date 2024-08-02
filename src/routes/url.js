const express=require('express');
const handleGenerateURL = require('../controller.js/url');

const router =express.Router();

router.post('/',handleGenerateURL);
module.exports=router;