"use client";
import AuthOrganizationList from "@/components/organizations/AuthOrganizationList";
import EmployeeTable from "@/components/organizations/EmployeeTable";
import { useState, useEffect } from "react";
import getClerkData from "@/utils/fetchClerkUsers";

function AuthOrganization({ emplist }) {
    const [employeeList, setEmployeeList] = useState(emplist);
    async function fetchData() {
        try {
            const response = await fetch("/api/fetchclerk", {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error("Could not update data", error);
        }
    }

    return (
        <>
            <div>
                <h2 className="mb-6 text-lg font-semibold">
                    Authorize Request!
                </h2>
                <AuthOrganizationList
                    employeeList={employeeList}
                    fetchData={fetchData}
                />
            </div>
            <button
                onClick={async () => {
                    fetchData();
                }}
            >
                clickme
            </button>
            {/* <EmployeeTable employeeList={employeeList} fetchData={fetchData} /> */}
        </>
    );
}

export default AuthOrganization;
