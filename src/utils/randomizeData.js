const fs = require("fs");

const userIDs = [
    "user_2XoieRxs3OMlyOhpJWrmuMt1ICc",
    "BDEA133313",
    "A7adju2421",
    "BDEA13213",
    "U005",
    "U001",
    "U002",
    "U003",
    "U004",
];

function getRandomFromArray(array) {
    const index = Math.floor(Math.random() * array.length);
    return array.splice(index, 1)[0];
}

function getRandomScoreAndDescription() {
    const ranges = [
        { min: 0, max: 15, description: "Critical" },
        { min: 16, max: 30, description: "Decent" },
        { min: 31, max: 50, description: "Good" },
    ];

    const range = ranges[Math.floor(Math.random() * ranges.length)];
    const score =
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

    return { score, description: range.description };
}

function getRandomAssessmentType() {
    const types = ["Depression", "Burn out", "Anxiety"];
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomDate(month) {
    const day = Math.floor(Math.random() * 28) + 1;
    return `2023-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}T12:00:00Z`;
}
function determineLevel(score) {
    if (score <= 15) {
        return "Critical";
    } else if (score <= 30) {
        return "Decent";
    } else {
        return "Good";
    }
}

function generateData() {
    const data = [];
    const months = ["09", "10", "11"];

    for (let month of months) {
        let tempUserIDs = [...userIDs]; // Copy the userIDs for each month

        for (let i = 0; i < userIDs.length; i++) {
            const { score, description } = getRandomScoreAndDescription();
            const userID =
                tempUserIDs.length > 0
                    ? getRandomFromArray(tempUserIDs)
                    : `RandomUser${i + 1}`;

            const level = determineLevel(score);

            data.push({
                userId: userID,
                assessmentType: getRandomAssessmentType(),
                score: score,
                level: level,
                levelDescription: description,
                timestamp: getRandomDate(month), // Changed from 'timestamps' to 'timestamp'
            });
        }
    }

    return data;
}

// Generate data
const jsonData = generateData();

// Export to a JSON file
fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2), "utf8");
console.log("JSON data has been written to data.json");
