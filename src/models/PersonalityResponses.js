import mongoose, { Schema } from "mongoose";

const PersonalityResponsesSchema = new Schema(
  {
    sessionId: {
      type: Schema.Types.ObjectId,
    },
    userId:{
      type: String,
    },
    personalityType: {
      type: String,
    },
    Q1: {
      type: Number,
      required: [true, "Q1 is required"],
    },
    Q2: {
      type: Number,
      required: [true, "Q2 is required"],
    },
    Q3: {
      type: Number,
      required: [true, "Q3 is required"],
    },
    Q4: {
      type: Number,
      required: [true, "Q4 is required"],
    },
    Q5: {
      type: Number,
      required: [true, "Q5 is required"],
    },
    Q6: {
      type: Number,
      required: [true, "Q6 is required"],
    },
    Q7: {
      type: Number,
      required: [true, "Q7 is required"],
    },
    Q8: {
      type: Number,
      required: [true, "Q8 is required"],
    },
    Q9: {
      type: Number,
      required: [true, "Q9 is required"],
    },
    Q10: {
      type: Number,
      required: [true, "Q10 is required"],
    },
    Q11: {
      type: Number,
      required: [true, "Q11 is required"],
    },
    Q12: {
      type: Number,
      required: [true, "Q12 is required"],
    },
    Q13: {
      type: Number,
      required: [true, "Q13 is required"],
    },
    Q14: {
      type: Number,
      required: [true, "Q14 is required"],
    },
    Q15: {
      type: Number,
      required: [true, "Q15 is required"],
    },
    Q16: {
      type: Number,
      required: [true, "Q16 is required"],
    },
    Q17: {
      type: Number,
      required: [true, "Q17 is required"],
    },
    Q18: {
      type: Number,
      required: [true, "Q18 is required"],
    },
    Q19: {
      type: Number,
      required: [true, "Q19 is required"],
    },
    Q20: {
      type: Number,
      required: [true, "Q20 is required"],
    },
    Q21: {
      type: Number,
      required: [true, "Q21 is required"],
    },
    Q22: {
      type: Number,
      required: [true, "Q22 is required"],
    },
    Q23: {
      type: Number,
      required: [true, "Q23 is required"],
    },
    Q24: {
      type: Number,
      required: [true, "Q24 is required"],
    },
    Q25: {
      type: Number,
      required: [true, "Q25 is required"],
    },
    Q26: {
      type: Number,
      required: [true, "Q26 is required"],
    },
    Q27: {
      type: Number,
      required: [true, "Q27 is required"],
    },
    Q28: {
      type: Number,
      required: [true, "Q28 is required"],
    },
    Q29: {
      type: Number,
      required: [true, "Q29 is required"],
    },
    Q30: {
      type: Number,
      required: [true, "Q30 is required"],
    },
    Q31: {
      type: Number,
      required: [true, "Q31 is required"],
    },
    Q32: {
      type: Number,
      required: [true, "Q32 is required"],
    },
  },
  {
    timestamps: true,
  }
);

const PersonalityResponses =
  mongoose.models.PersonalityResponses ||
  mongoose.model(
    "PersonalityResponses",
    PersonalityResponsesSchema,
    "personalityresponses"
  );

export default PersonalityResponses;
