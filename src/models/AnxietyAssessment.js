import mongoose, { Schema } from "mongoose";

const AnxietyAssessmentSchema = new Schema(
    {
        No: String,
        question: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.AnxietyAssessment ||
    mongoose.model("AnxietyAssessment", AnxietyAssessmentSchema, "anxietyAssessment");
