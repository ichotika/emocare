import mongoose, {Schema} from "mongoose";

const OrgSchema = new Schema (
    {
        orgName: String,
        owner: String
    },
    {
        collection: 'organizations'
    }
)

export default mongoose.models.Organization || mongoose.model("Organization",OrgSchema);