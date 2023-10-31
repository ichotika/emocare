"use client";


const OverallCard = ({assessmentData, employee}) => {
    // Calculate the net change in employees in month 10 of 2023
    const targetYear = 2023; 
    const targetMonth = 9; // Month 10 

    const changeInEmployeesMonth10Year2023 = employee.reduce((change, emp) => {
        const joinDate = new Date(emp.joinDate);
        const resignDate = new Date(emp.resignDate);

        if (joinDate.getMonth() === targetMonth && joinDate.getFullYear() === targetYear) {
            change += 1; // Employee joined in month 10
        }

        if (resignDate.getMonth() === targetMonth && resignDate.getFullYear() === targetYear) {
            change -= 1; // Employee resigned in month 10
        }

        return change;
    }, 0);



    // calculate %diff : need to fix formula
    const activeEmployees = employee.filter(emp => emp.status === "active");

    // Filter active employees with assessmentTakenDate in month 10 of 2023
    const activeEmployeesInMonth10Year2023 = activeEmployees.filter(emp => {
        const assessmentDate = new Date(emp.assessmentTakenDate);
        return (
            assessmentDate.getMonth() === targetMonth && assessmentDate.getFullYear() === targetYear
        );
    });

    // Calculate the percentage difference
    const percentageDifference = ((activeEmployeesInMonth10Year2023.length / activeEmployees.length) * 100).toFixed(0);




    // calculate assessment diff
    const month9 = 8; // Month 9 
    const month10 = 9; // Month 10 

    // Filter assessments taken in month 9 of 2023
    const assessmentsInMonth9Year2023 = assessmentData.filter(assessment => {
        const assessmentTimestamp = new Date(assessment.timestamp);
        return (
            assessmentTimestamp.getMonth() === month9 && assessmentTimestamp.getFullYear() === targetYear
        );
    });

    // Filter assessments taken in month 10 of 2023
    const assessmentsInMonth10Year2023 = assessmentData.filter(assessment => {
        const assessmentTimestamp = new Date(assessment.timestamp);
        return (
            assessmentTimestamp.getMonth() === month10 && assessmentTimestamp.getFullYear() === targetYear
        );
    });

    const assessmentCountInMonth9Year2023 = assessmentsInMonth9Year2023.length;
    const assessmentCountInMonth10Year2023 = assessmentsInMonth10Year2023.length;
    const assessmentDifference = assessmentCountInMonth10Year2023 - assessmentCountInMonth9Year2023;
    console.log(`diff 10 vs 9 in 2023: ${assessmentDifference}`);
    
    return (
        <div className="mb-7 mt-7 flex">
            <div className="flex w-3/4 gap-8">
                <div className="flex flex-grow p-1">
                    <a
                        href="#"
                        className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Total Employees
                        </p>
                        <div className="mt-3 flex flex-grow justify-between">
                            <h4 className="text-5xl font-bold text-white">
                                {employee.length}
                            </h4>
                            <p className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {changeInEmployeesMonth10Year2023}
                            </p>
                        </div>
                    </a>
                </div>

                <div className="flex flex-grow p-1">
                    <a
                        href="#"
                        className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Active Employee
                        </p>
                        <div className="mt-3 flex justify-between">
                            <h4 className="text-5xl font-bold text-white">
                                {activeEmployees.length}
                            </h4>
                            <p className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                +{percentageDifference}%
                            </p>
                        </div>
                    </a>
                </div>

                <div className="flex flex-grow p-1">
                    <a
                        href="#"
                        className="block max-w-sm flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Total Assessments
                        </p>
                        <div className="mt-3 flex justify-between">
                            <h4 className="text-5xl font-bold text-white">
                                {assessmentData.length}
                            </h4>
                            <p className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {assessmentDifference}%
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OverallCard;
