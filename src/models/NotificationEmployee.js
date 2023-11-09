import mongoose, { Schema } from "mongoose";

const NotiEmpSchema = new Schema(
    {
        userid: String,
        timestamp: Date,
        isRead: Boolean
    }
);

export default mongoose.models.NotiEmp || mongoose.model("NotiEmp", NotiEmpSchema, "NotiEmp");