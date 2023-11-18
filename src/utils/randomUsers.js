function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomName() {
    const firstNames = ["John", "Jane", "Alex", "Laura", "Tom", "Alice"];
    const lastNames = ["Smith", "Doe", "Johnson", "Davis", "Brown", "Wilson"];
    return `${firstNames[getRandomInt(firstNames.length)]} ${
        lastNames[getRandomInt(lastNames.length)]
    }`;
}

function getRandomDepartment() {
    const departments = [
        "IT",
        "HR",
        "Sales",
        "Marketing",
        "Finance",
        "Operations",
    ];
    return departments[getRandomInt(departments.length)];
}

function getRandomDesignation() {
    const designations = [
        "Developer",
        "Manager",
        "Analyst",
        "Coordinator",
        "Specialist",
    ];
    return designations[getRandomInt(designations.length)];
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

function getRandomDate(start, end) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toISOString();
}

// Generate 30 random user records
const randomUsers = Array.from({ length: 30 }, (_, index) => ({
    userId: index + 1,
    userImg: `https://randomuser.me/api/portraits/${
        getRandomBoolean() ? "men" : "women"
    }/${getRandomInt(100)}.jpg`,
    department: getRandomDepartment(),
    fullname: getRandomName(),
    title: getRandomDesignation(),
    pending: getRandomBoolean(),
    joinDate: getRandomDate(new Date(2020, 0, 1), new Date()),
}));
