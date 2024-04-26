import mongoose, { Schema } from "mongoose";

const dataujianSchema = new Schema(
  {
    peserta: {
      type: String,
      ref: "Siswa",
    },

    idujian: { type: mongoose.Schema.Types.ObjectId, ref: "Ujian" },
  },
  {
    timestamps: true,
  }
);

const Dataujian =
  mongoose.models.Dataujian || mongoose.model("Dataujian", dataujianSchema);

export default Dataujian;
