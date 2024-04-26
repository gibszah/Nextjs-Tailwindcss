import mongoose, { Schema } from "mongoose";

const matpelSchema = new Schema(
  {
    namamatpel: String,
  },
  {
    timestamps: true,
  }
);

const Matpel = mongoose.models.Matpel || mongoose.model("Matpel", matpelSchema);

export default Matpel;
