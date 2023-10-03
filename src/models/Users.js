import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema(
    {
        uid: Number,
        isEmployee: Boolean,
        firstName: String,
        lastName: String,
        email: String,
        phone: Number,
        age: Number,
        organization: String,
    },
    {
        timestamps: true,
    }
  );

  
export default mongoose.models.Users || mongoose.model("Users", UserSchema);
