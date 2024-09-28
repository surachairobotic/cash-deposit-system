const db = require('../config/db');

const Member = db.model('Member', {
  memberId: {
    type: 'text',
    primaryKey: true,
  },
  name: {
    type: 'text',
  },
  status: {
    type: 'text',
  },
  accountBalance: {
    type: 'decimal',
  },
});

module.exports = Member;
