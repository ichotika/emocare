import styled from "styled-components";
import Link from "next/link";

const TableRow = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    column-gap: 1rem;
    align-items: start;

    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-200);
    color: var(--color-grey-600);
    padding: 0.5rem;
`;

function ResourceRow({ topic, category, id, userRead }) {
    return (
        <TableRow>
            <div>
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
            <div>{category}</div>
        </TableRow>
    );
}

export default ResourceRow;
