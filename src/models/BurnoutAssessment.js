import mongoose, { Schema } from "mongoose";

const BurnoutAssessmentSchema = new Schema(
    {
        No: String,
        question: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.BurnoutAssessment ||
    mongoose.model("BurnoutAssessment", BurnoutAssessmentSchema, "burnoutAssessment");