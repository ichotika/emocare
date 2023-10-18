import Header from "@/components/organizations/Header";
import AuthOrganization from "@/components/organizations/AuthOrganization";

async function getData() {
    const res = await import("../../api/organization/temp-employees/route");
    const data = (await res.GET()).json();
    return data;
}

export default async function Home() {
    const emplist = await getData();

    return (
        <>
            <Header headertext={"Management"} />
            <AuthOrganization emplist={emplist} />
        </>
    );
}
