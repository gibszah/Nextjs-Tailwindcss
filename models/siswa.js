import mongoose, { Schema } from "mongoose";

const siswaSchema = new Schema(
  {
    nis: String,
    name: String,
    alamat: String,
  },
  {
    timestamps: true,
  }
);

const Siswa = mongoose.models.Siswa || mongoose.model("Siswa", siswaSchema);

export default Siswa;
