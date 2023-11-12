"use client";
import styled from "styled-components";
import OrganizationRow from "@/components/organizations/OrganizationRow";
import HeaderTab from "@/components/base/HeaderTab";
import { useState } from "react";
import Pagination from "@/components/base/Pagination";

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
    padding: 1.6rem 2rem;
    width: 100%;
`;

function EmployeeTable({ employeeList }) {
    const [activeTab, setActiveTab] = useState("All");
    const [curNumber, setCurNumber] = useState(1);
    const max = 5;
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
                    <div>Employee Name</div>
                    <div></div>
                    <div>Employee ID</div>
                    <div>Joined EmoCare</div>
                </TableHeader>
                {activeTab === "All"
                    ? employeeList
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
                                      id={list.userId}
                                      key={list.userId}
                                  />
                              );
                          })
                    : employeeList
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
                                      id={list.userId}
                                      key={list.userId}
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

export default EmployeeTable;
