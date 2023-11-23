import mongoose, { Schema } from "mongoose";

const EducationResponseSchema = new Schema(
    {
        category: String,
        topic: Array,
        topicId: String,
        userId: String,
        status: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.EducationResponse ||
    mongoose.model(
        "EducationResponse",
        EducationResponseSchema,
        "educationResponse"
    );
