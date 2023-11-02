import mongoose, { Schema } from "mongoose";

const AnxietyResponseSchema = new Schema(
  {
    userId: String,
    assessment_id: Number,
    assessment_type: String,
    assess_date: Date,
    score: Number,
    level: String,
    level_description: String,
  }, 
  {
    timestamps: true
  }
);

const AnxietyResponse =
  mongoose.models.AnxietyResponse ||
  mongoose.model("AnxietyResponse", AnxietyResponseSchema, "anxietyResponse");

export default AnxietyResponse;