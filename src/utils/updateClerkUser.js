import { clerkClient } from "@clerk/nextjs";

export default async function updateClerkUser() {
    try {
        const userId = "user_2Xj6laq466aLOP3JeMBLifmJT3q";
        const params = { firstName: "John", lastName: "Wick" };
        console.log(userId, params);
        const user = await clerkClient.users.updateUser(userId, params);
        const updated = await user.json();
        console.log(updated);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
