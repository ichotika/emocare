"use client";
import AuthOrganizationList from "@/components/organizations/AuthOrganizationList";
import EmployeeTable from "@/components/organizations/EmployeeTable";
import { useState, useEffect } from "react";

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
            const data = await response.json();
            setEmployeeList(data.emplist);
        } catch (error) {
            console.error("Could not fetch data", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div>
                <p className="mb-6 mt-2 text-b-xl font-semibold">
                    Authorize Requests to Join Organization
                </p>
                <AuthOrganizationList
                    employeeList={employeeList}
                    onStatusChanged={fetchData}
                />
            </div>
            <EmployeeTable employeeList={employeeList} />
        </>
    );
}

export default AuthOrganization;
