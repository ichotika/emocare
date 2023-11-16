"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import Growth from "@/public/assets/organization/Growth.gif";
import Normal from "@/public/assets/organization/Normal.gif";
import Decline from "@/public/assets/organization/Decline.gif";

const OverallCard = ({ assessmentData, employee }) => {
    function countEmployeesByMonthAndYear(employees, year, month, dateType) {
        return employees.reduce((count, emp) => {
            const dateValue = new Date(emp[dateType]);

            if (
                dateValue.getMonth() === month &&
                dateValue.getFullYear() === year
            ) {
                count += 1; // Employee had the specified date in the specified month and year
            }

            return count;
        }, 0);
    }

    const targetYear = 2023;
    const targetMonth = 10; // Month 11

    const changeInEmployeesMonth11Year2023 = countEmployeesByMonthAndYear(
        employee,
        targetYear,
        targetMonth,
        "joinDate"
    );
    const activeEmployeesInMonth11Year2023 = countEmployeesByMonthAndYear(
        employee,
        targetYear,
        targetMonth,
        "lastLogin"
    );
    const activeEmployeesInMonth10Year2023 = countEmployeesByMonthAndYear(
        employee,
        targetYear,
        targetMonth - 1,
        "lastLogin"
    );
    let percentageDifference = 0;

    if (activeEmployeesInMonth10Year2023 !== 0) {
        percentageDifference = (
            ((activeEmployeesInMonth11Year2023 -
                activeEmployeesInMonth10Year2023) /
                activeEmployeesInMonth10Year2023) *
            100
        ).toFixed(2);

        if (isNaN(percentageDifference) || !isFinite(percentageDifference)) {
            percentageDifference = 0;
        }
    }

    return (
        <div className="mb-7 mt-7 flex sm:items-center sm:justify-center">
            <div className="flex w-4/5 flex-row gap-4 sm:flex-col sm:items-center sm:justify-center ">
                <div className="flex flex-grow">
                    <div
                        style={{ width: "384px" }}
                        className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow"
                    >
                        <p className="text-xl">Total Employees</p>
                        <div className="mt-3 flex flex-grow justify-between">
                            <div className="flex flex-grow flex-col justify-between">
                                <h4 className="flex-grow text-5xl font-bold">
                                    {employee.length}
                                </h4>

                                <div className="flex text-sm">
                                    {changeInEmployeesMonth11Year2023 > 0 ? (
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
                                                    changeInEmployeesMonth11Year2023
                                                }
                                            </p>
                                        </>
                                    ) : changeInEmployeesMonth11Year2023 < 0 ? (
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
                                                    changeInEmployeesMonth11Year2023
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
                                            {changeInEmployeesMonth11Year2023}
                                        </div>
                                    )}
                                    <div>vs last month</div>
                                </div>
                            </div>

                            {/* gif */}
                            {changeInEmployeesMonth11Year2023 > 0 ? (
                                <Image src={Growth} alt="GIF increase" />
                            ) : changeInEmployeesMonth11Year2023 < 0 ? (
                                <Image src={Decline} alt="GIF decrease" />
                            ) : (
                                <Image src={Normal} alt="GIF remain" />
                            )}
                        </div>
                    </div>
                </div>

                {/* active employee */}
                <div className="flex flex-grow">
                    <div
                        style={{ width: "384px" }}
                        className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow"
                    >
                        <p className="text-xl">Active Employee</p>
                        <div className="mt-3 flex flex-grow justify-between">
                            <div className="flex flex-grow flex-col justify-between">
                                <h4 className="flex-grow text-5xl font-bold">
                                    {(activeEmployeesInMonth11Year2023 /
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
                                <Image src={Growth} alt="GIF increase" />
                            ) : percentageDifference < 0 ? (
                                <Image src={Decline} alt="GIF decrease" />
                            ) : (
                                <Image src={Normal} alt="GIF remain" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverallCard;
