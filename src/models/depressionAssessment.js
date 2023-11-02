import mongoose, { Schema } from "mongoose";

const DepressionAssessmentSchema = new Schema(
    {
        No: String,
        question: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.DepressionAssessment ||
    mongoose.model("DepressionAssessment", DepressionAssessmentSchema, "depressionAssessment");