import mongoose, { Schema } from "mongoose";

const AssessHistorySchema = new Schema(
    {
        userID: String,
        assessmentType: String,
        score: Number,
        level: String,
        levelDescription: String,
        // aid: Number,
        // empName: String,
        // emailID: String,
        // anonymous: String,
        // assessDate: Date,
    },
    {
        timestamps: true
    }
);

export default mongoose.models.AssessHistory || mongoose.model("AssessHistory", AssessHistorySchema, "assesshistory");