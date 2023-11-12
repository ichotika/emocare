import Noti from "@/models/NotificationEmployee";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";


export async function PATCH(request, { params }) {
  try {
    await connectMongoDB();
    const { id } = params;
    const existingNotification = await Noti.findById(id);

    existingNotification.isRead = true;
    await existingNotification.save();

    return NextResponse.json({ message: "Notification updated", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred while updating the notification", status: 500 });
  }
}


