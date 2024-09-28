const express = require('express');
const { getMemberDetails } = require('../controllers/memberController');

const router = express.Router();

router.get('/:memberId', getMemberDetails);

module.exports = router;
