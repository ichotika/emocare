const fs = require("fs");

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

function getRandomDate(months) {
    const month = months[Math.floor(Math.random() * months.length)];
    const day = Math.floor(Math.random() * 28) + 1; // Keeping days between 1 and 28 for simplicity
    return `2023-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}T12:00:00Z`;
}

function generateData() {
    const data = [];
    const months = ["08", "09", "10"]; // August, September, October

    for (let i = 1; i <= 20; i++) {
        const { score, description } = getRandomScoreAndDescription();
        data.push({
            userid: i.toString(),
            assessment_id: `A${i}`,
            score: score,
            assessment_type: getRandomAssessmentType(),
            timestamp: getRandomDate(months),
            score_description: description,
        });
    }

    return data;
}

// Generate data
const jsonData = generateData();

// Export to a JSON file
fs.writeFileSync("data.json", JSON.stringify(jsonData, null, 2), "utf8");
console.log("JSON data has been written to data.json");
