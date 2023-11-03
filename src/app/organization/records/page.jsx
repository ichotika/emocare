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
    console.log(countObj);
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
    const mergedEmpList = [];

    emplist.emplist.forEach((item1) => {
        const item2DataArray = prevRecords.filter(
            (item2) => item2.userId === item1.userId
        );
        const item3DataArray = curRecords.filter(
            (item3) => item3.userId === item1.userId
        );

        const getAssessmentData = (dataArray, type) => {
            const data = dataArray.find(
                (item) => item.assessment_type === type
            );
            return data ? data.score_description : "Not Taken";
        };

        const assessmentTypes = ["Depression", "Burn out", "Anxiety"];

        assessmentTypes.forEach((type) => {
            mergedEmpList.push({
                ...item1,
                assessment_type: type,
                score_description_prev: getAssessmentData(item2DataArray, type),
                score_description_cur: getAssessmentData(item3DataArray, type),
            });
        });
    });

    const notification = await getNoti();
    const assessment = await getAssessment();
    console.log(mergedEmpList);
    return (
        <>
            <Header
                headertext={"Assessment Record"}
                notification={notification}
                assessment={assessment}
            />
            <AssessmentRecords
                emplist={mergedEmpList}
                prevObj={prevObj}
                curObj={curObj}
            />
        </>
    );
}
