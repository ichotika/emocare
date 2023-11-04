"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProRequest from "@/public/assets/Wireframes/ProRequest.svg";
import MainBtn from "../base/MainBtn";

const AuthOrganizationList = ({ employeeList, fetchData }) => {
    async function updateData(userId) {
        const response = await fetch(`/api/organization/temp-employees`, {
            method: "PATCH",
            body: JSON.stringify({
                userId: userId,
                pending: true,
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error updating user:", errorData.error);
            alert("Error updating user. Please try again later.");
            return;
        }

        fetchData();
    }

    function confirmEmployee(userId) {
        updateData(userId);
        alert("confirm");
    }

    function testDecline() {
        alert("decline");
    }

    return (
        <>
            {employeeList.map((list) =>
                list.pending === false ? (
                    <div
                        key={list.userId}
                        className="mb-7 flex justify-between rounded-md bg-slate-400 p-5"
                    >
                        <div className="flex justify-between gap-6">
                            <Image src={ProRequest} alt="Profile of User" />
                            <div className="flex flex-col justify-between">
                                <h3 className="font-semibold">
                                    {list.fullname}
                                </h3>
                                <p className="pb-4 font-light">{list.title}</p>
                                <p className="font-semibold">{list.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-6">
                            <MainBtn
                                buttontext="Confirm"
                                bgColor="bg-blue-700"
                                textColor="text-white"
                                handleClick={() => {
                                    confirmEmployee(list.userId);
                                }}
                            />
                            <MainBtn
                                buttontext="Decline"
                                bgColor="bg-white"
                                textColor="text-blue-700"
                                handleClick={testDecline}
                            />
                        </div>
                    </div>
                ) : null
            )}
        </>
    );
};

export default AuthOrganizationList;
