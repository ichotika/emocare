import mongoose, { Schema } from "mongoose";

const TemporarilySavedSchema = new Schema(
    {
        userId: String,
        assessType: String,
        savedData: Object
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.TemporarilySaved ||
    mongoose.model("TemporarilySaved", TemporarilySavedSchema, "temporarilysaved");