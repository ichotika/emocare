"use client";
import styled from "styled-components";
import RecordRow from "@/components/organizations/RecordRow";
import HeaderTab from "@/components/base/HeaderTab";
import Pagination from "../base/Pagination";
import { useState } from "react";
const Table = styled.div`
    border-top: 2px solid #f5f9ff;
    border-left: 2px solid #f5f9ff;
    border-right: 2px solid #f5f9ff;
    font-size: 1rem;
    min-width: 800px;
`;

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 6% 30% 16% 16% 16% 16%;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    background-color: #f5f9ff;
    border-bottom: 2px solid #f5f9ff;
    letter-spacing: 0.4px;
    font-weight: 700;
    color: var(--color-grey-600);
    padding: 0.5rem 0;
`;

function RecordTable({ employeeList }) {
    const [activeTab, setActiveTab] = useState("All");
    const [curNumber, setCurNumber] = useState(1);
    const max = 10;
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    };

    return (
        <div className="mt-8">
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
                setCurNumber={setCurNumber}
            />
            <Table className="mb-8 mt-6">
                <TableHeader>
                    <div></div>
                    <div className="">Employee Designation</div>
                    <div className="text-center">Condition</div>
                    <div className="text-center">Current Level</div>
                    <div className="text-center">Previous Level</div>
                    <div className="text-center">Monthly Asessment</div>
                </TableHeader>

                {activeTab === "All"
                    ? employeeList
                          .slice(
                              curNumber === 1 ? 0 : (curNumber - 1) * max,
                              curNumber * max
                          )
                          .map((list, index) => {
                              return (
                                  <RecordRow
                                      title={list.title}
                                      department={list.department}
                                      joinDate={formatDate(list.joinDate)}
                                      id={list.userId}
                                      assessmentType={list.assessmentType}
                                      scoreCur={list.levelCur}
                                      scorePrev={list.levelPrev}
                                      key={index}
                                  />
                              );
                          })
                    : employeeList
                          .filter((list) => list.department === activeTab)
                          .slice(
                              curNumber === 1 ? 0 : (curNumber - 1) * max,
                              curNumber * max
                          )
                          .map((list, index) => {
                              return (
                                  <RecordRow
                                      title={list.title}
                                      department={list.department}
                                      joinDate={formatDate(list.joinDate)}
                                      id={list.email}
                                      assessmentType={list.assessmentType}
                                      scoreCur={list.levelCur}
                                      scorePrev={list.levelPrev}
                                      key={index}
                                  />
                              );
                          })}
            </Table>
            {activeTab === "All" ? (
                <Pagination
                    dataArr={employeeList}
                    max={max}
                    curNumber={curNumber}
                    setCurNumber={setCurNumber}
                />
            ) : (
                <Pagination
                    dataArr={employeeList.filter(
                        (list) => list.department === activeTab
                    )}
                    max={max}
                    curNumber={curNumber}
                    setCurNumber={setCurNumber}
                />
            )}
        </div>
    );
}

export default RecordTable;
