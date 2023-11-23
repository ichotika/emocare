import mongoose, { Schema } from "mongoose";

const BurnoutResponseSchema = new Schema(
  {
    userId: String,
    assessment_id: Number,
    assessment_type: String,
    assess_date: Date,
    score: Number,
    // level: String,
    level_description: String,
  }, 
  {
    timestamps: true
  }
);

const BurnoutResponse =
  mongoose.models.BurnoutResponse ||
  mongoose.model("BurnoutResponse", BurnoutResponseSchema, "burnoutResponse");

export default BurnoutResponse;