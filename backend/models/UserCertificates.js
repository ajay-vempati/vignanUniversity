const mongoose = require("mongoose");

const fileRefSchema = new mongoose.Schema({
  originalName: {
    type: String,
    required: true,
  },
  ref: { type: mongoose.Schema.Types.ObjectId, ref: "CertificateFile" },
});

const CertificateSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: fileRefSchema,
  signature: fileRefSchema,
  "10th": fileRefSchema,
  inter: fileRefSchema,
  diploma: fileRefSchema,
  ug1: fileRefSchema,
  ug2: fileRefSchema,
  pg1: fileRefSchema,
  pg2: fileRefSchema,
});

CertificateSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("UserCertificates", CertificateSchema);
