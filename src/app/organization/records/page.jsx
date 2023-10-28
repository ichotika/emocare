import Header from "@/components/organizations/Header";
import AssessmentRecords from "@/components/organizations/AssessmentRecords";

async function getEmployees() {
    const res = await import("../../api/organization/temp-employees/route");
    const data = (await res.GET()).json();
    return data;
}

async function getRecords() {
    const res = await import("../../api/organization/assessment-records/route");
    const data = (await res.GET()).json();
    return data;
}

function calculateRatio(arr) {
    const countObj = arr.reduce(
        (totalCount, item) => {
            if (item.score_description === "Good") {
                totalCount.good = totalCount.good + 1;
            } else if (item.score_description === "Decent") {
                totalCount.decent = totalCount.decent + 1;
            } else {
                totalCount.critical = totalCount.critical + 1;
            }
            totalCount.total = totalCount.total + 1;
            return totalCount; // <-- You need to return the totalCount object here
        },
        { good: 0, decent: 0, critical: 0, total: 0 }
    );

    return countObj;
}

export default async function Records() {
    const dayjs = require("dayjs");
    const emplist = await getEmployees();
    const assessmentRecord = await getRecords();
    const currentMonth = dayjs().month();
    const prevRecords = assessmentRecord.assessmentArr.filter(
        (item) => dayjs(item.timestamp).month() === currentMonth - 1
    );
    const curRecords = assessmentRecord.assessmentArr.filter(
        (item) => dayjs(item.timestamp).month() === currentMonth
    );
    const prevObj = calculateRatio(prevRecords);
    const curObj = calculateRatio(curRecords);
    return (
        <>
            <Header headertext={"Assessment Record"} />
            <AssessmentRecords
                emplist={emplist}
                prevObj={prevObj}
                curObj={curObj}
            />
        </>
    );
}
