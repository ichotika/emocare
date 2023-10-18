import mongoose from "mongoose";

const TempEmployeeSchema = new mongoose.Schema({
    userId: String,
    pending: Boolean,
});
const TempEmployee =
    mongoose.models.TempEmployee ||
    mongoose.model("TempEmployee", TempEmployeeSchema, "temp-employee");

export default TempEmployee;
