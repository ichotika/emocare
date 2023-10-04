import connectMongoDB from "@/libs/mongodb";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  await connectMongoDB();
  const { id } = params;
  const {
    newUid: uid,
    newIsEmployee: isEmployee,
    newFirstName: firstName,
    newLastName: lastName,
    newEmail: email,
    newPhone: phone,
    newAge: age,
    newOrganization: organization,
  } = await request.json();

  await Users.findByIdAndUpdate(id, {
    uid,
    isEmployee,
    firstName,
    lastName,
    email,
    phone,
    age,
    organization,
  });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await Users.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
