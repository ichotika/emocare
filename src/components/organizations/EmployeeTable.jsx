"use client";
import styled from "styled-components";
import Profile from "@/public/assets/Wireframes/UserProDraft.jpg";
import OrganizationRow from "@/components/organizations/OrganizationRow";
import HeaderTab from "@/components/base/HeaderTab";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);

    font-size: 1rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`;

const TableHeader = styled.header`
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

function OrganizationTable({ employeeList }) {
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
            <HeaderTab tabNames={["ALL", "Designer", "Developper"]} />
            <Table role="table" className="mb-12 mt-6 overflow-x-auto">
                <TableHeader role="row">
                    <div>Employee Name</div>
                    <div></div>
                    <div>Employee ID</div>
                    <div>Joined EmoCare</div>
                </TableHeader>
                {employeeList.map((list) =>
                    list.pending === true ? (
                        <OrganizationRow
                            profilePic={Profile}
                            name={list.fullname}
                            title={list.title}
                            department={list.department}
                            joinDate={formatDate(list.joinDate)}
                            id={list.email}
                            key={list.userId}
                        />
                    ) : null
                )}
            </Table>
        </div>
    );
}

export default OrganizationTable;
