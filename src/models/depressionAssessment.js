import mongoose from "mongoose";

const depressionAssessmentSchema = new mongoose.Schema({});
const depressionAssessment =
  mongoose.models.depressionAssessment ||
  mongoose.model("depressionAssessment", depressionAssessmentSchema, "depressionAssessment");

export default depressionAssessment;