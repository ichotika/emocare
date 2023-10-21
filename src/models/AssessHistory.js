import mongoose, { Schema } from "mongoose";

const AssessHistorySchema = new Schema(
    {
        aid: Number,
        empName: String,
        emailID: String,
        assessDate: Date,
        anonymous: String,
        depressionLevel: String,
        depressionPercent: Number,
        anxietyLevel: String,
        anxietyPercent: Number,
        burnoutLevel: String,
        burnoutPercent: Number,
    },
    {
        timestamps: true
    }
);

export default mongoose.models.AssessHistory || mongoose.model("AssessHistory", AssessHistorySchema, "assesshistory");