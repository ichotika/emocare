import mongoose, {Schema} from "mongoose";

const OrgSchema = new Schema (
    {
        orgName: String,
        owner: String
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Orgs || mongoose.model("Orgs",OrgSchema);