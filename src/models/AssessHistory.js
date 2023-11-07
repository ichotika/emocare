import mongoose, { Schema } from "mongoose";

const AssessHistorySchema = new Schema(
    {
        userId: string,
        score: Number,
        assessmentType: String,
        scoreDescription: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.AssessHistory ||
    mongoose.model("AssessHistory", AssessHistorySchema, "assesshistory");
