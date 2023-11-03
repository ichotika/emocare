"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const OverallCard = ({ assessmentData, employee }) => {
    const targetYear = 2023;
    const targetMonth = 9; // Month 10

    const changeInEmployeesMonth10Year2023 = employee.reduce((change, emp) => {
        const joinDate = new Date(emp.joinDate);
        const resignDate = new Date(emp.resignDate);

        if (
            joinDate.getMonth() === targetMonth &&
            joinDate.getFullYear() === targetYear
        ) {
            change += 1; // Employee joined in month 10
        }

        return change;
    }, 0);

    // calculate %diff
    const activeEmployees = employee.filter((emp) => emp.status === "active");

    const activeEmployeesInMonth10Year2023 = activeEmployees.filter((emp) => {
        const assessmentDate = new Date(emp.assessmentTakenDate);
        return (
            assessmentDate.getMonth() === targetMonth &&
            assessmentDate.getFullYear() === targetYear
        );
    });

    const percentageDifference = (
        (activeEmployeesInMonth10Year2023.length / activeEmployees.length) *
        100
    ).toFixed(0);

    // calculate assessment diff
    const month9 = 8; // Month 9
    const month10 = 9; // Month 10

    // Filter assessments taken in month 9 of 2023
    const assessmentsInMonth9Year2023 = assessmentData.filter((assessment) => {
        const assessmentTimestamp = new Date(assessment.timestamp);
        return (
            assessmentTimestamp.getMonth() === month9 &&
            assessmentTimestamp.getFullYear() === targetYear
        );
    });

    // Filter assessments taken in month 10 of 2023
    const assessmentsInMonth10Year2023 = assessmentData.filter((assessment) => {
        const assessmentTimestamp = new Date(assessment.timestamp);
        return (
            assessmentTimestamp.getMonth() === month10 &&
            assessmentTimestamp.getFullYear() === targetYear
        );
    });

    const assessmentCountInMonth9Year2023 = assessmentsInMonth9Year2023.length;
    const assessmentCountInMonth10Year2023 =
        assessmentsInMonth10Year2023.length;
    const assessmentDifference =
        assessmentCountInMonth10Year2023 - assessmentCountInMonth9Year2023;
    console.log(`diff 10 vs 9 in 2023: ${assessmentDifference}`);

    return (
        <div className="mb-7 mt-7 flex">
            <div className="flex flex-col gap-4 xl:w-4/5 xl:flex-row">
                <div className="flex flex-grow p-1">
                    <div className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <p className="text-xl">Total Employees</p>
                        <div className="mt-3 flex flex-grow justify-between">
                            <div className="flex flex-grow flex-col justify-between">
                                <h4 className="flex-grow text-5xl font-bold">
                                    {employee.length}
                                </h4>

                                <div className="flex text-sm">
                                    {changeInEmployeesMonth10Year2023 > 0 ? (
                                        <>
                                            <div style={{ color: "green" }}>
                                                <FaArrowUp />
                                            </div>
                                            <p
                                                style={{
                                                    color: "green",
                                                    marginLeft: "5px",
                                                    marginRight: "5px",
                                                }}
                                            >
                                                +
                                                {
                                                    changeInEmployeesMonth10Year2023
                                                }
                                            </p>
                                        </>
                                    ) : changeInEmployeesMonth10Year2023 < 0 ? (
                                        <>
                                            <div style={{ color: "red" }}>
                                                <FaArrowDown />
                                            </div>
                                            <p
                                                style={{
                                                    color: "red",
                                                    marginLeft: "5px",
                                                    marginRight: "5px",
                                                }}
                                            >
                                                -
                                                {Math.abs(
                                                    changeInEmployeesMonth10Year2023
                                                )}
                                            </p>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                color: "black",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                        >
                                            {changeInEmployeesMonth10Year2023}
                                        </div>
                                    )}
                                    <div>vs last month</div>
                                </div>
                            </div>
                            <svg
                                className="w-1/2"
                                height="auto"
                                viewBox="0 0 2000 1400"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 1387.275c21-5.86 63-16.554 105-29.296 42-12.743 63-7.085 105-34.416 42-27.33 63-61.513 105-102.236 42-40.722 63-96.672 105-101.377 42-4.705 63 83.506 105 77.85 42-5.655 63-65.3 105-106.129 42-40.83 63-68.964 105-98.018 42-29.054 63-27.774 105-47.25s63-32.486 105-50.131c42-17.645 63-56.424 105-38.092s63 114.066 105 129.754c42 15.688 63 4.17 105-51.314s63-164.235 105-226.109c42-61.874 63-106.503 105-83.26 42 23.242 63 245.89 105 199.472 42-46.416 63-337.502 105-431.556 42-94.054 63 11.87 105-38.714 42-50.584 63-246.98 105-214.21 42 32.77 84 302.45 105 378.061l5 879.696H0Z"
                                    fill="#5bd32f1a"
                                />
                                <path
                                    d="M0 1387.275c21-5.86 63-16.554 105-29.296 42-12.743 63-7.085 105-34.416 42-27.33 63-61.513 105-102.236 42-40.722 63-96.672 105-101.377 42-4.705 63 83.506 105 77.85 42-5.655 63-65.3 105-106.129 42-40.83 63-68.964 105-98.018 42-29.054 63-27.774 105-47.25s63-32.486 105-50.131c42-17.645 63-56.424 105-38.092s63 114.066 105 129.754c42 15.688 63 4.17 105-51.314s63-164.235 105-226.109c42-61.874 63-106.503 105-83.26 42 23.242 63 245.89 105 199.472 42-46.416 63-337.502 105-431.556 42-94.054 63 11.87 105-38.714 42-50.584 63-246.98 105-214.21 42 32.77 84 302.45 105 378.061"
                                    fill="none"
                                    stroke="#5bd32f"
                                    strokeWidth="6"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* active employee */}
                <div className="flex flex-grow p-1">
                    <div className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <p className="text-xl">Active Employee</p>
                        <div className="mt-3 flex flex-grow justify-between">
                            <div className="flex flex-grow flex-col justify-between">
                                <h4 className="flex-grow text-5xl font-bold">
                                    {(activeEmployees.length /
                                        employee.length) *
                                        100}
                                    %
                                </h4>

                                <div className="flex items-center text-sm">
                                    {percentageDifference > 0 ? (
                                        <>
                                            <div style={{ color: "green" }}>
                                                <FaArrowUp />
                                            </div>
                                            <p
                                                style={{
                                                    color: "green",
                                                    marginLeft: "5px",
                                                    marginRight: "5px",
                                                }}
                                            >
                                                {percentageDifference}%
                                            </p>
                                        </>
                                    ) : percentageDifference < 0 ? (
                                        <>
                                            <div style={{ color: "red" }}>
                                                <FaArrowDown />
                                            </div>
                                            <p
                                                style={{
                                                    color: "red",
                                                    marginLeft: "5px",
                                                    marginRight: "5px",
                                                }}
                                            >
                                                {Math.abs(percentageDifference)}
                                                %
                                            </p>
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                color: "black",
                                                marginLeft: "5px",
                                                marginRight: "5px",
                                            }}
                                        >
                                            {percentageDifference}%
                                        </div>
                                    )}
                                    <div>vs last month</div>
                                </div>
                            </div>
                            <svg
                                className="w-1/2"
                                height="auto"
                                viewBox="0 0 2000 1400"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 1387.275c21-5.86 63-16.554 105-29.296 42-12.743 63-7.085 105-34.416 42-27.33 63-61.513 105-102.236 42-40.722 63-96.672 105-101.377 42-4.705 63 83.506 105 77.85 42-5.655 63-65.3 105-106.129 42-40.83 63-68.964 105-98.018 42-29.054 63-27.774 105-47.25s63-32.486 105-50.131c42-17.645 63-56.424 105-38.092s63 114.066 105 129.754c42 15.688 63 4.17 105-51.314s63-164.235 105-226.109c42-61.874 63-106.503 105-83.26 42 23.242 63 245.89 105 199.472 42-46.416 63-337.502 105-431.556 42-94.054 63 11.87 105-38.714 42-50.584 63-246.98 105-214.21 42 32.77 84 302.45 105 378.061l5 879.696H0Z"
                                    fill="#5bd32f1a"
                                />
                                <path
                                    d="M0 1387.275c21-5.86 63-16.554 105-29.296 42-12.743 63-7.085 105-34.416 42-27.33 63-61.513 105-102.236 42-40.722 63-96.672 105-101.377 42-4.705 63 83.506 105 77.85 42-5.655 63-65.3 105-106.129 42-40.83 63-68.964 105-98.018 42-29.054 63-27.774 105-47.25s63-32.486 105-50.131c42-17.645 63-56.424 105-38.092s63 114.066 105 129.754c42 15.688 63 4.17 105-51.314s63-164.235 105-226.109c42-61.874 63-106.503 105-83.26 42 23.242 63 245.89 105 199.472 42-46.416 63-337.502 105-431.556 42-94.054 63 11.87 105-38.714 42-50.584 63-246.98 105-214.21 42 32.77 84 302.45 105 378.061"
                                    fill="none"
                                    stroke="#5bd32f"
                                    strokeWidth="6"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverallCard;
