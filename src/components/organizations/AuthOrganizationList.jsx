"use client";
import Image from "next/image";
import MainBtn from "../base/MainBtn";
import anonymous from "@/public/assets/organization/user-blue.svg";

const AuthOrganizationList = ({ employeeList, onStatusChanged }) => {
    async function updateData(userId, department, title) {
        const payload = {
            userId: userId,
            role: "employee",
            approved: true,
            department: department,
            designation: title,
            organization: "WMDD",
        };
        try {
            const response = await fetch("/api/updateclerk", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            onStatusChanged();
        } catch (error) {
            console.error("Could not update data", error);
        }
    }

    function confirmEmployee(userId, department, title) {
        updateData(userId, department, title);
        alert("confirm");
    }

    function testDecline() {
        alert("decline");
    }

    return (
        <>
            {employeeList.every((list) => list.pending === true) ? (
                <p>No new requests</p>
            ) : (
                employeeList.map((list) =>
                    list.pending === false ? (
                        <div
                            key={list.userId}
                            className="mb-7 flex items-center justify-between rounded-md border-2 border-p-blue-6 p-6 xl:max-w-[500px] xl:flex-col xl:content-around xl:p-4"
                        >
                            <div className="flex w-full items-center gap-6 xl:mb-4 ">
                                <div className="me-2 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-p-blue-6 p-4">
                                    <Image
                                        src={anonymous}
                                        alt="Profile picture"
                                    />
                                </div>
                                <div className="flex flex-col justify-between">
                                    <p className="text-b-lg font-bold">
                                        Employee ID: {list.userId.slice(0, 9)}
                                    </p>
                                    <p className="font-medium">{list.title}</p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-end gap-6 xl:justify-between">
                                <MainBtn
                                    buttontext="Confirm"
                                    bgColor="bg-p-blue-1"
                                    textColor="text-white"
                                    handleClick={() => {
                                        confirmEmployee(
                                            list.userId,
                                            list.department,
                                            list.title
                                        );
                                    }}
                                />
                                <MainBtn
                                    buttontext="Decline"
                                    bgColor="bg-white"
                                    borderColor="border border-g-gray-2"
                                    textColor="text-p-blue-1"
                                    handleClick={testDecline}
                                />
                            </div>
                        </div>
                    ) : null
                )
            )}
        </>
    );
};

export default AuthOrganizationList;
