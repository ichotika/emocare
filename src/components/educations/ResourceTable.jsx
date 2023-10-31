"use client";
import ResourceRow from "./ResourceRow";
import styled from "styled-components";

const Table = styled.div`
    border: 1px solid var(--color-grey-200);
    background-color: var(--color-grey-0);
    overflow: hidden;
`;

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    column-gap: 1rem;
    align-items: start;

    background-color: var(--color-grey-100);
    border-bottom: 1px solid var(--color-grey-200);
    color: var(--color-grey-600);
`;

function ResourceTable({ educationList }) {
    return (
        <div>
            <Table
                role="table"
                className="overflow-x-auto rounded-lg bg-gray-500 text-base text-white"
            >
                <TableHeader role="row" className="p-2">
                    <div>Chapter</div>
                    <div>Category</div>
                </TableHeader>
                {educationList.map((elist, index) => (
                    <div key={index}>
                        <ResourceRow
                            topic={elist.topic}
                            category={elist.category}
                            id={elist.topicId}
                        />
                    </div>
                ))}
            </Table>
        </div>
    );
}

export default ResourceTable;
