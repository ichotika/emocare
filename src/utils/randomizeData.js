const fs = require("fs");

const userIDs = [
    "user_2Y0xrxG8MvcW2DCosLJimclY3Qy",
    "user_2XoieRxs3OMlyOhpJWrmuMt1ICc",
    "user_2XmlKxMzrbWeCmYAykfKIc5AYO2",
    "user_2XmZ48kI0zqFYIDVhGWcqWpcpDv",
    "user_2XjJmTTENoeu4CZn29IvGtQVcaT",
    "user_2Xj6laq466aLOP3JeMBLifmJT3q",
    "user_2Xj6T57AGPoMOBXCT2LTQMf324s",
    "user_2Xj5N0npf6pJfGaHlIWLvjxBJSp",
    "user_2Xj10InQPYdmPjOR9VreThe9fic",
    "user_2XPEtkTKwMrPNxfwJI5Tlm7Lih5",
    "user_2XPEPN06KiJLHjHhZtqObwybzLh",
    "user_2Wm410lLaboT0TuFcqYiOgEjFBL",
    "user_2Wm3vzaMwIEixd3yeUVZadaiEej",
    "user_2Wm2YG63MkK5hmmnAjFbxFsgjsx",
    "user_2Wm2BZttrdTbl64xxb2wnJsm9Cz",
    "user_2WjIXHWCPMqRxSY3nl9oYdFhLJI",
];

function getRandomFromArray(array) {
    const index = Math.floor(Math.random() * array.length);
    return array.splice(index, 1)[0];
}

function getRandomScore(assessmentType) {
    let max;
    switch (assessmentType) {
        case "depression":
            max = 27;
            break;
        case "Anxiety":
            max = 21;
            break;
        case "burnout":
            max = 75;
            break;
    }
    return Math.floor(Math.random() * (max + 1));
}

function determineLevel(assessmentType, score) {
    if (assessmentType === "depression") {
        return score <= 4 ? "Good" : score <= 14 ? "Moderate" : "Critical";
    } else if (assessmentType === "Anxiety") {
        return score < 19 ? "Good" : score <= 49 ? "Moderate" : "Critical";
    } else if (assessmentType === "burnout") {
        return score < 19 ? "Good" : score <= 49 ? "Moderate" : "Critical";
    }
}

function getRandomAssessmentType() {
    const types = ["depression", "burnout", "Anxiety"];
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomDate(month) {
    const day = Math.floor(Math.random() * 28) + 1;
    return `2023-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}T12:00:00Z`;
}
function generateData() {
    const data = [];
    const months = ["10", "11"];

    for (let month of months) {
        let tempUserIDs = [...userIDs];

        while (tempUserIDs.length > 0) {
            const userID = getRandomFromArray(tempUserIDs);
            const assessmentType = getRandomAssessmentType();
            const score = getRandomScore(assessmentType);
            const level = determineLevel(assessmentType, score);

            data.push({
                userId: userID,
                assessmentType: assessmentType,
                score: score,
                level: level,
                levelDescription: level, // Same as level
                createdAt: getRandomDate(month),
                updatedAt: getRandomDate(month),
            });
        }
    }

    return data;
}

// Generate data
const jsonData = generateData();

// Export to a JSON file
fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2), "utf8");
