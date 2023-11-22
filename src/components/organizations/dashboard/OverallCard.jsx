"use client";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import Growth from "@/public/assets/organization/Growth.gif";
import Normal from "@/public/assets/organization/Normal.gif";
import Decline from "@/public/assets/organization/Decline.gif";
const OverallCard = ({ employee }) => {
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
        ).toFixed(0);

        if (isNaN(percentageDifference) || !isFinite(percentageDifference)) {
            percentageDifference = 0;
        }
    }

    return (
        <div className="mb-7 mt-7 flex xl:items-center xl:justify-center">
            <div className="flex max-h-[166px] flex-row gap-4 xl:max-h-full xl:flex-col xl:items-center xl:justify-center">
                <div className="flex grow" style={{ width: "348px" }}>
                    <div className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-between">
                                <p className="flex text-xl">Total Employees</p>
                                <h4 className="flex text-5xl font-bold">
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
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <Image src={Growth} alt="GIF increase" />
                                </div>
                            ) : changeInEmployeesMonth11Year2023 < 0 ? (
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <Image src={Decline} alt="GIF decrease" />
                                </div>
                            ) : (
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <Image src={Normal} alt="GIF remain" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* active employee */}
                <div className="flex grow" style={{ width: "348px" }}>
                    <div className="flex-grow rounded-lg border border-gray-200 bg-white p-6 shadow">
                        <div className="flex justify-between">
                            <div className="flex flex-col justify-between">
                                <p className="flex text-xl">Total Employees</p>
                                <h4 className="flex text-5xl font-bold">
                                    {(
                                        (activeEmployeesInMonth11Year2023 /
                                            employee.length) *
                                        100
                                    ).toFixed(0)}
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
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <Image src={Growth} alt="GIF increase" />
                                </div>
                            ) : changeInEmployeesMonth11Year2023 < 0 ? (
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <Image src={Decline} alt="GIF decrease" />
                                </div>
                            ) : (
                                <div className="flex h-32 w-32 items-center justify-center">
                                    <Image src={Normal} alt="GIF remain" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverallCard;
