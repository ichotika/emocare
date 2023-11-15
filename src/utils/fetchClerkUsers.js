import { clerkClient } from "@clerk/nextjs";

export default async function getClerkData() {
    try {
        const users = await clerkClient.users.getUserList({
            orderBy: "-created_at",
            limit: 300,
        });

        const newUsers = users
            .filter(
                (user) =>
                    user.unsafeMetadata.role === "employee" &&
                    user.unsafeMetadata.organization === "WMDD"
            )
            .map((user) => {
                return {
                    userId: user.id,
                    userImg: user.imageUrl,
                    department: user.unsafeMetadata.department,
                    fullname: user.firstName + " " + user.lastName,
                    title: user.unsafeMetadata.designation,
                    pending: user.unsafeMetadata.approved,
                    joinDate: user.createdAt,
                    lastLogin: user.lastSignInAt,
                };
            });

        return newUsers;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
