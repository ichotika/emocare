import Header from "@/components/organizations/Header";
import AuthOrganization from "@/components/organizations/AuthOrganization";
import { clerkClient } from "@clerk/nextjs";

async function getData() {
    try {
        // const res = await import("../../api/organization/temp-employees/route");
        // const data = (await res.GET()).json();
        const users = await clerkClient.users.getUserList();
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
                };
            });
        console.log(newUsers);
        return newUsers;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

async function getNoti() {
    try {
        const res = await import("../../api/notification/organization/route");
        const data = (await res.GET()).json();
        return data;
    } catch (error) {
        console.error("Error fetching notifications:", error);
        return null;
    }
}

async function getAssessment() {
    try {
        const res = await import("../../api/notification/assessment/route");
        const data = (await res.GET()).json();
        return data;
    } catch (error) {
        console.error("Error fetching assessment:", error);
        return null;
    }
}

export default async function Home() {
    const emplist = await getData();
    const notification = await getNoti();
    const assessment = await getAssessment();

    return (
        <>
            <Header
                headertext={"Management"}
                notification={notification}
                assessment={assessment}
            />
            <AuthOrganization emplist={emplist} />
        </>
    );
}
