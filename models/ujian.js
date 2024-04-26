import mongoose, { Schema } from "mongoose";

const ujianSchema = new Schema(
  {
    namaujian: String,
    idmatpel: { type: mongoose.Schema.Types.ObjectId, ref: "Matpel" },
  },
  {
    timestamps: true,
  }
);

const Ujian = mongoose.models.Ujian || mongoose.model("Ujian", ujianSchema);

export default Ujian;
