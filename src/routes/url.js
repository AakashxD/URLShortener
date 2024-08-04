const express = require("express");
const {handleGenerateURL, handleGetAnalytics} = require("../controller.js/url");

const router = express.Router();

router.post("/", handleGenerateURL);
router.get('/analytics/:shortId',handleGetAnalytics);
module.exports = router;
