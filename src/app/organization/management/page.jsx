import Header from "@/components/organizations/Header";
import AuthOrganization from "@/components/organizations/AuthOrganization";
import getClerkData from "@/utils/fetchClerkUsers";
export default async function Home() {
    const emplist = await getClerkData();

    return (
        <>
            <Header headertext={"Management"} />
            <AuthOrganization emplist={emplist} />
        </>
    );
}
