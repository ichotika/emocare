import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB();
  try {
    const {
      uid,
      isEmployee,
      firstName,
      lastName,
      email,
      phone,
      age,
      organization,
    } = await request.json();

    const user = new Users({
      uid,
      isEmployee,
      firstName,
      lastName,
      email,
      phone,
      age,
      organization,
    });

    await user.save();

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const users = await Users.find();
    return NextResponse.json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Users.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
