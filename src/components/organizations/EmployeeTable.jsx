"use client";
import styled from "styled-components";
import OrganizationRow from "@/components/organizations/OrganizationRow";
import HeaderTab from "@/components/base/HeaderTab";
import { useState } from "react";
const Table = styled.div`
    border: 1px solid var(--color-grey-200);

    font-size: 1rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`;

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 30% 25% 20% 25%;
    column-gap: 1.6rem;
    align-items: start;

    background-color: var(--color-grey-100);
    border-bottom: 1px solid var(--color-grey-200);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
`;

function EmployeeTable({ employeeList }) {
    const [activeTab, setActiveTab] = useState("All");
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <div className="mt-12">
            <h2 className="mb-6 text-lg font-semibold">Manage Employees</h2>
            <HeaderTab
                tabNames={[
                    "All",
                    "IT",
                    "Designer",
                    "Developer",
                    "Finance",
                    "Marketing",
                ]}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Table role="table" className="mb-12 mt-6 overflow-x-auto">
                <TableHeader role="row">
                    <div>Employee Name</div>
                    <div></div>
                    <div>Employee ID</div>
                    <div>Joined EmoCare</div>
                </TableHeader>
                {employeeList.map((list) => {
                    if (
                        list.pending &&
                        (list.department === activeTab || activeTab === "All")
                    ) {
                        return (
                            <OrganizationRow
                                profilePic={list.userImg}
                                name={list.fullname}
                                title={list.title}
                                department={list.department}
                                joinDate={formatDate(list.joinDate)}
                                id={list.email}
                                key={list.userId}
                            />
                        );
                    }
                    return null;
                })}
            </Table>
        </div>
    );
}

export default EmployeeTable;
