"use client";
import styled from "styled-components";
import RecordRow from "@/components/organizations/RecordRow";
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
    grid-template-columns: 5% 25% 15% 15% 15% 15%;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    background-color: var(--color-grey-100);
    border-bottom: 1px solid var(--color-grey-200);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 0.75rem 0;
`;

function RecordTable({ employeeList }) {

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
            <Table role="table" className="mb-12 mt-6">
                <TableHeader role="row">
                    <div></div>
                    <div className="">Employee Designation</div>
                    <div className="text-center">Condition</div>
                    <div className="text-center">Current Level</div>
                    <div className="text-center">Previous Level</div>
                    <div className="text-center">Monthly Asessment</div>
                </TableHeader>
                {employeeList.map((list, index) => {
                    if (
                        list.pending &&
                        (list.department === activeTab || activeTab === "All")
                    ) {
                        return (
                            <RecordRow
                                title={list.title}
                                department={list.department}
                                joinDate={formatDate(list.joinDate)}
                                id={list.userId}
                                assessmentType={list.assessment_type}
                                scoreCur={list.score_description_cur}
                                scorePrev={list.score_description_prev}
                                key={index}
                            />
                        );
                    }
                    return null;
                })}
            </Table>
        </div>
    );
}

export default RecordTable;
