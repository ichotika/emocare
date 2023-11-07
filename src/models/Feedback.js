import mongoose, {Schema} from "mongoose";

const FeedbackSchema = new Schema (
    {
        clerk_id: String,
        organization_name: String,
        department: String,
        designation: String,
        category: String,
        content: String,
    }
)

export default mongoose.models.Feedback || mongoose.model("Feedback",FeedbackSchema);