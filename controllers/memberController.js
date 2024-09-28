const Member = require('../models/Member');

exports.getMemberDetails = async (req, res) => {
  const { memberId } = req.params;
  try {
    const member = await Member.findOne({ where: { memberId } });
    if (!member) {
      return res.status(404).json({ status: "error", errorCode: "NOTFOUND001", message: "Member not found." });
    }
    res.json(member);
  } catch (err) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
};
