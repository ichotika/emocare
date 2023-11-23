import mongoose, { Schema } from "mongoose";

const DepressionResponseSchema = new Schema(
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

const DepressionResponse =
  mongoose.models.DepressionResponse ||
  mongoose.model("DepressionResponse", DepressionResponseSchema, "depressionResponse");

export default DepressionResponse;