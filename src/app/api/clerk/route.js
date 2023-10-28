import connectMongoDB from "@/libs/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Organization from "@/models/Organization";

const mockWebhookRequestData = {
    data: {
        backup_code_enabled: false,
        banned: false,
        birthday: "",
        create_organization_enabled: true,
        created_at: 1698446060328,
        delete_self_enabled: true,
        email_addresses: [
            {
                email_address: "panh141298+emocare@gmail.com",
                id: "idn_2XMjq8WJ68El2P7xGCveosId0Bv",
                linked_to: [],
                object: "email_address",
                reserved: false,
                verification: {
                    attempts: 1,
                    expire_at: 1698446631240,
                    status: "verified",
                    strategy: "email_code",
                },
            },
        ],
        external_accounts: [],
        external_id: null,
        first_name: "Anh",
        gender: "",
        has_image: false,
        id: "user_2XMjtrYYX95rJ9paQYeDddUWwFz",
        image_url:
            "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yV2IyTzVyelNSUk1YSEIyNnBpUnBsVmJSNjgiLCJyaWQiOiJ1c2vyXzJYTWp0cllZWDk1cko5cGFRWWVEZGRVV3dGeiIsImluaXRpYWxzIjoiQU4ifQ",
        last_name: "Nguyen",
        last_sign_in_at: null,
        locked: false,
        object: "user",
        password_enabled: true,
        phone_numbers: [],
        primary_email_address_id: "idn_2XMjq8WJ68El2P7xGCveosId0Bv",
        primary_phone_number_id: null,
        primary_web3_wallet_id: null,
        private_metadata: {},
        profile_image_url: "https://www.gravatar.com/avatar?d=mp",
        public_metadata: {},
        saml_accounts: [],
        totp_enabled: false,
        two_factor_enabled: false,
        unsafe_metadata: { organization: "WMDD" },
        updated_at: 1698446060367,
        username: null,
        web3_wallets: [],
    },
    object: "event",
    type: "user.created",
};

// This needs to be updated to work with request data instead of mock data after Clerk webhook is enabled
export async function POST(request) {
    // const payload= await request.json();
    // console.log(payload);
    // return NextResponse.json({ message: "Received" });
    const payload = mockWebhookRequestData;
    try {
        if (payload.type !== "user.created") {
            return NextResponse.json({
                message: "Not the event type expected for this endpoint",
            });
        }
        const data = payload.data;
        await connectMongoDB();
        console.log("Connected to MongoDB");
        let res = mongoose.connection.db.collection("organizations");
        let findOrg = await res
            .find({ orgName: data.unsafe_metadata.organization })
            .toArray();
        if (findOrg.length === 0) {
            const newOrg = new Organization({
                orgName: data.unsafe_metadata.organization,
                owner: data.id,
            });
            await newOrg.save();
            return NextResponse.json({ message: "New Organization Saved!" });
        } else if (findOrg.length === 1) {
            return NextResponse.json({
                message: `Organization already exists under owner ${findOrg[0].owner}. New user is employee`,
            });
        } else {
            return NextResponse.json({
                message:
                    "Somehow multiple organizations were found...Organizations collection needs cleaning",
            });
        }
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

// Testing endpoint
export async function GET() {
    return NextResponse.json({ message: "This is where Clerk talks to me!" });
}
