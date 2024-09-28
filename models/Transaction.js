const db = require('../config/db');

const Transaction = db.model('Transaction', {
  id: {
    type: 'serial',
    primaryKey: true,
  },
  memberId: {
    type: 'text',
  },
  amount: {
    type: 'decimal',
  },
  timestamp: {
    type: 'timestamp',
    default: db.fn('now'),
  },
  erpTransactionId: {
    type: 'text',
  },
  status: {
    type: 'text',
    default: 'pending',
  },
});

module.exports = Transaction;
