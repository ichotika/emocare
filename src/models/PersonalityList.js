import mongoose from "mongoose";

const PersonalityListSchema = new mongoose.Schema({});
const PersonalityList =
  mongoose.models.PersonalityList ||
  mongoose.model("PersonalityList", PersonalityListSchema, "personalitylist");

export default PersonalityList;
