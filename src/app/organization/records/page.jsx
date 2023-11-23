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

function calculateRatio(arr) {
    const countObj = arr.reduce(
        (totalCount, item) => {
            let level;
            const score = item.score;

            switch (item.assessmentType) {
                case "depression":
                    level =
                        score >= 15
                            ? "Critical"
                            : score >= 5
                            ? "Moderate"
                            : "Good";
                    break;
                case "Anxiety":
                    level =
                        score >= 10
                            ? "Critical"
                            : score >= 5
                            ? "Moderate"
                            : "Good";
                    break;
                case "burnout":
                    level =
                        score >= 50
                            ? "Critical"
                            : score >= 19
                            ? "Moderate"
                            : "Good";
                    break;
            }
            totalCount[
                level === "Good"
                    ? "good"
                    : level === "Moderate"
                    ? "decent"
                    : "critical"
            ] += 1;
            totalCount.total += 1;
            return totalCount;
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

    const [emplist, assessmentRecord, assessment] = await Promise.all([
        emplistPromise,
        assessmentRecordPromise,
    ]);
    const prevRecords = assessmentRecord.assessmentArr.filter(
        (item) => dayjs(item.createdAt).month() === currentMonth - 1
    );
    const curRecords = assessmentRecord.assessmentArr.filter(
        (item) => dayjs(item.createdAt).month() === currentMonth
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
        function getAssessmentData(dataArray, type) {
            const data = dataArray.find(
                (item) =>
                    item.assessmentType.toLowerCase() === type.toLowerCase()
            );

            if (!data) {
                return "Not Taken";
            }

            let level;
            const score = data.score;

            switch (type.toLowerCase()) {
                case "depression":
                    level =
                        score >= 15
                            ? "Critical"
                            : score >= 5
                            ? "Moderate"
                            : "Good";
                    break;
                case "anxiety":
                    level =
                        score >= 10
                            ? "Critical"
                            : score >= 5
                            ? "Moderate"
                            : "Good";
                    break;
                case "burnout":
                    level =
                        score >= 50
                            ? "Critical"
                            : score >= 19
                            ? "Moderate"
                            : "Good";
                    break;
                default:
                    level = "Unknown";
            }

            return level;
        }

        const assessmentTypes = ["Depression", "Burnout", "Anxiety"];

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
            <Header headertext={"Assessment Record"} />
            <AssessmentRecords
                emplist={mergedEmpList}
                prevObj={prevObj}
                curObj={curObj}
            />
        </>
    );
}
