import mongoose, { Schema } from "mongoose";

const EducationSchema = new Schema(
    {
        category: String,
        topic: Array,
        topicId: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Education ||
    mongoose.model("Education", EducationSchema, "tempeducation");
