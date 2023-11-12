import mongoose from "mongoose";

const NotiSchema = new mongoose.Schema({
    title: String,
    description: String,
    time: String,
    button: String,
    isRead: Boolean
});

const Noti =
    mongoose.models.Noti ||
    mongoose.model("Noti", NotiSchema, "temp-notification");

export default Noti;