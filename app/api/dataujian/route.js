import startDb from "@/lib/db";
import Dataujian from "@/models/dataujian";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { pesertaNis, ujianId } = await request.json();
    console.log("Received data from the front-end:");

    await startDb();
    await Dataujian.create({
      peserta: pesertaNis,
      idujian: ujianId,
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
    const dataujians = await Dataujian.find();

    return NextResponse.json({ dataujians });
  } catch (error) {
    console.error({ message: "Internal server error" });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await startDb();
  await Dataujian.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data dihapus" }, { status: 200 });
}
