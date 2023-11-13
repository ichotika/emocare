import mongoose, {Schema} from "mongoose";



// title is designation in Clerk user
// description is content in POST request
const FeedbackSchema = new Schema (
    {
        clerk_id: String,
        organization_name: String,
        department: String,
        title: String,
        category: String,
        description: String,
    },
    {
            timestamps: true,
    }
)

export default mongoose.models.Feedback || mongoose.model("Feedback",FeedbackSchema);