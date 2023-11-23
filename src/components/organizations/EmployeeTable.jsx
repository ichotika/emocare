"use client";
import styled from "styled-components";
import OrganizationRow from "@/components/organizations/OrganizationRow";
import HeaderTab from "@/components/base/HeaderTab";
import { useState } from "react";
import Pagination from "@/components/base/Pagination";

const Table = styled.div`
    border-top: 2px solid #f5f9ff;
    border-left: 2px solid #f5f9ff;
    border-right: 2px solid #f5f9ff;
    font-size: 1rem;
    min-width: 800px;
`;
const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 5% 35% 30% 30%;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    background-color: #f5f9ff;
    border-bottom: 2px solid #f5f9ff;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 0.75rem 0;
`;

function EmployeeTable({ employeeList }) {
    const [activeTab, setActiveTab] = useState("All");
    const [curNumber, setCurNumber] = useState(1);
    const max = 5;
    const filterEmp = employeeList.filter((list) => list.pending !== false);
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
                setCurNumber={setCurNumber}
            />
            <Table role="table" className="mb-12 mt-6 overflow-x-auto">
                <TableHeader role="row">
                    <div></div>
                    <div>Employee Designation</div>
                    <div className="text-center">Employee ID</div>
                    <div className="text-center">Date of Joining</div>
                </TableHeader>
                {activeTab === "All"
                    ? filterEmp
                          .slice(
                              curNumber === 1 ? 0 : (curNumber - 1) * max,
                              curNumber * max
                          )
                          .map((list) => {
                              return (
                                  <OrganizationRow
                                      profilePic={list.userImg}
                                      name={list.fullname}
                                      title={list.title}
                                      department={list.department}
                                      joinDate={formatDate(list.joinDate)}
                                      id={list.userId.slice(0, 9)}
                                      key={list.userId}
                                  />
                              );
                          })
                    : filterEmp
                          .filter((list) => list.department === activeTab)
                          .slice(
                              curNumber === 1 ? 0 : (curNumber - 1) * max,
                              curNumber * max
                          )
                          .map((list) => {
                              return (
                                  <OrganizationRow
                                      profilePic={list.userImg}
                                      name={list.fullname}
                                      title={list.title}
                                      department={list.department}
                                      joinDate={formatDate(list.joinDate)}
                                      id={list.userId.slice(0, 9)}
                                      key={list.userId}
                                  />
                              );
                          })}
            </Table>
            {activeTab === "All" ? (
                <Pagination
                    dataArr={filterEmp}
                    max={max}
                    curNumber={curNumber}
                    setCurNumber={setCurNumber}
                />
            ) : (
                <Pagination
                    dataArr={filterEmp.filter(
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

export default EmployeeTable;
