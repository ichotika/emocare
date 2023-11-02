import Header from "@/components/organizations/Header";
import AuthOrganization from "@/components/organizations/AuthOrganization";

async function getData() {
    const res = await import("../../api/organization/temp-employees/route");
    const data = (await res.GET()).json();
    return data;
}
async function getNoti() {
    const res = await import("../../api/notification/organization/route");
    const data = (await res.GET()).json();
    return data;
}
async function getAssessment() {
    const res = await import("../../api/notification/assessment/route");
    const data = (await res.GET()).json();
    return data;
}



export default async function Home() {
    const emplist = await getData();
    const notification = await getNoti();
    const assessment = await getAssessment();
   

    return (
        <>
            <Header headertext={"Management"} notification={notification} assessment={assessment}/>
            <AuthOrganization emplist={emplist} />
        </>
    );
}
