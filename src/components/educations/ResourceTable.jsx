"use client";
import ResourceRow from "./ResourceRow";
import styled from "styled-components";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);
    background-color: var(--color-grey-0);
`;

const TableHeader = styled.div`
    background-color: var(--color-grey-100);
    border-bottom: 1px solid var(--color-grey-200);
    color: var(--color-grey-600);
`;

function ResourceTable({ educationList, userEdu }) {
    return (
        <div>
            <Table
                role="table"
                className="overflow-hidden sm:overflow-x-auto rounded-lg text-base text-white"
            >
                <TableHeader role="row" className="p-2 text-b-sm font-bold grid grid-cols-4 gap-2">
                    <div className="col-span-3 sm:col-span-2 ml-7">Chapter</div>
                    <div className="sm:col-span-2 ml-8">Category</div>
                </TableHeader>
                {educationList.map((elist, index) => (
                    <div key={index}>
                        <ResourceRow
                            topic={elist.topic}
                            category={elist.category}
                            id={elist.topicId}
                            userRead={userEdu.filter((user) => user.topicId === elist.topicId)}
                        />
                    </div>
                ))}
            </Table>
        </div>
    );
}

export default ResourceTable;
