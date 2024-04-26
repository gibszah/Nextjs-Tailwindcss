import startDb from "@/lib/db";
import Ujian from "@/models/ujian";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { namaujian, idmatpelId } = await request.json();
    console.log("Received data from the front-end:");

    await startDb();
    await Ujian.create({
      namaujian,
      idmatpel: idmatpelId,
    });

    return NextResponse.json(
      { message: "Data telah di buat" },
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
  try {
    const ujians = await Ujian.find();

    return NextResponse.json({ ujians });
  } catch (error) {
    console.error({ message: "Internal server error" });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await startDb();
  await Ujian.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data ujian dihapus" }, { status: 200 });
}
