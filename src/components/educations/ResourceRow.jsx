import styled from "styled-components";
import Link from "next/link";

const TableRow = styled.div`

    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-200);
    color: var(--color-grey-600);
    padding: 0.5rem;
`;

function ResourceRow({ topic, category, id, userRead }) {
    return (
        <TableRow className="grid grid-cols-4 gap-2">
            <div className="col-span-3 sm:col-span-2">
                <input type="checkbox" name="eduDone" id="eduDone" checked={userRead.length > 0} readOnly />
                <Link className="pl-4"
                    href={{
                        pathname: `education/module`,
                        query: { topicId: id },
                    }}
                >
                    {topic}
                </Link>
            </div>
            <div className="sm:col-span-2 ml-8">{category}</div>
        </TableRow>
    );
}

export default ResourceRow;
