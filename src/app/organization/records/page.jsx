import Header from "@/components/organizations/Header";
import AssessmentRecords from "@/components/organizations/AssessmentRecords";

async function getEmployees() {
    const res = await import("../../api/fetchclerk/route");
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
            if (item.level === "Good") {
                totalCount.good = totalCount.good + 1;
            } else if (item.level === "Decent") {
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
    const currentMonth = dayjs().month();
    const emplistPromise = getEmployees();
    const assessmentRecordPromise = getRecords();
    const notificationPromise = getNoti();
    const assessmentPromise = getAssessment();
    const [emplist, assessmentRecord, notification, assessment] =
        await Promise.all([
            emplistPromise,
            assessmentRecordPromise,
            notificationPromise,
            assessmentPromise,
        ]);

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
            const data = dataArray.find((item) => item.assessmentType === type);
            return data ? data.level : "Not Taken";
        };

        const assessmentTypes = ["Depression", "Burn out", "Anxiety"];

        assessmentTypes.forEach((type) => {
            mergedEmpList.push({
                ...item1,
                assessmentType: type,
                levelPrev: getAssessmentData(item2DataArray, type),
                levelCur: getAssessmentData(item3DataArray, type),
            });
        });
    });

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
