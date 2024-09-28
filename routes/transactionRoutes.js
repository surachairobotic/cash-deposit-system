const express = require('express');
const { createDeposit } = require('../controllers/transactionController');

const router = express.Router();

router.post('/', createDeposit);

module.exports = router;
