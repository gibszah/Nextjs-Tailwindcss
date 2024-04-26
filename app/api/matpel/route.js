import startDb from "@/lib/db";
import Matpel from "@/models/matpel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { namamatpel } = await request.json();
    console.log("Received data from the front-end:");

    await startDb();
    await Matpel.create({
      namamatpel,
    });

    return NextResponse.json(
      { message: "Data matpel telah di buat" },
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
    const matpels = await Matpel.find();

    return NextResponse.json({ matpels });
  } catch (error) {
    console.error({ message: "Internal server error" });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await startDb();
  await Matpel.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data matpel dihapus" }, { status: 200 });
}
