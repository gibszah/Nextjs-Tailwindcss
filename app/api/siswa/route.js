import startDb from "@/lib/db";
import Siswa from "../../../models/siswa";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { nis, name, alamat } = await request.json();
    console.log("Received data from the front-end:");

    await startDb();
    await Siswa.create({
      nis,
      name,
      alamat,
    });

    return NextResponse.json(
      { message: "Data Siswa telah di buat" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to create data:", error);
    return NextResponse.json(
      { error: "Failed to create data" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await startDb();
  const siswas = await Siswa.find();

  return NextResponse.json({ siswas });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await startDb();
  await Siswa.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data Siswa dihapus" }, { status: 200 });
}
