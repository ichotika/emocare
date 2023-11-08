import mongoose, { Schema } from "mongoose";

const AssessHistorySchema = new Schema(
    {
        userId: String,
        assessmentType: String,
        score: Number,
        level: String,
        levelDescription: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.AssessHistory ||
    mongoose.model("AssessHistory", AssessHistorySchema, "assesshistory");
