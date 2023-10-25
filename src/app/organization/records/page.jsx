import Header from "@/components/organizations/Header";
import AssessmentRecords from "@/components/organizations/AssessmentRecords";

async function getData() {
    const res = await import("../../api/organization/temp-employees/route");
    const data = (await res.GET()).json();
    return data;
}

export default async function Records() {
    const emplist = await getData();
    return (
        <>
            <Header headertext={"Assessment Record"} />
            <AssessmentRecords emplist={emplist} />
        </>
    );
}
