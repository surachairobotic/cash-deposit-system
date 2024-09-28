const Transaction = require('../models/Transaction');
const Member = require('../models/Member');

exports.createDeposit = async (req, res) => {
  const { memberId, amount } = req.body;
  try {
    const member = await Member.findOne({ where: { memberId } });
    if (!member) {
      return res.status(404).json({ status: "error", errorCode: "NOTFOUND001", message: "Member not found." });
    }
    
    const transaction = await Transaction.create({ memberId, amount });
    
    // Integrate with ERP system here
    // const erpResponse = await notifyERP(transaction);
    
    res.status(201).json({ transactionId: transaction.id, status: "success", message: "Deposit recorded successfully." });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
