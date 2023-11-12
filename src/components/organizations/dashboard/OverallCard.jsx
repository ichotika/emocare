"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const OverallCard = ({ assessmentData, employee }) => {
    const targetYear = 2023;
    const targetMonth = 9; // Month 10

    const changeInEmployeesMonth10Year2023 = employee.reduce((change, emp) => {
        const joinDate = new Date(emp.joinDate);

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
    // console.log(`diff 10 vs 9 in 2023: ${assessmentDifference}`);

    return (
        <div className="mb-7 mt-7 flex sm:items-center sm:justify-center">
            <div className="flex gap-4 w-4/5 flex-row sm:flex-col sm:items-center sm:justify-center ">
                <div className="flex flex-grow p-1">
                    <div style={{width: '384px'}} className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow">

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
                            
                            {/* gif */}
                            {changeInEmployeesMonth10Year2023 > 0 ? (
                                 <img src="/organization/org_increase.gif" alt="GIF increase"  />
                            ) : changeInEmployeesMonth10Year2023 < 0 ? (
                                <img src="/organization/decrease.gif" alt="GIF decrease"  />
                            ) : (
                                <img src="/organization/org_increase.gif" alt="GIF increase"  />
                            )}

                        </div>
                    </div>
                </div>

                {/* active employee */}
                <div className="flex flex-grow p-1">
                    <div style={{width: '384px'}} className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow">
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

                            {/* gif */}
                            {percentageDifference > 0 ? (
                                 <img src="/organization/org_increase.gif" alt="GIF increase"  />
                            ) : percentageDifference < 0 ? (
                                <img src="/organization/decrease.gif" alt="GIF decrease"  />
                            ) : (
                                <img src="/organization/org_increase.gif" alt="GIF increase"  />
                            )}

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverallCard;
