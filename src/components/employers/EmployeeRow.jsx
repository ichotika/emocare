"use client";
import Image from "next/image";
import styled from "styled-components";
function EmployeeRow({ profilePic, name, title, id, joinDate }) {
  const TableRow = styled.div`
    display: grid;
    grid-template-columns: 30% 25% 20% 25%;
    column-gap: 1.6rem;
    align-items: start;

    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-200);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 0.8rem 2.4rem;
  `;

  return (
    <TableRow>
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          src={profilePic}
          width={48}
          height={48}
          alt="Profile picture"
        />
        <div>
          <h3 className="font-semibold text-sm">{name}</h3>
          <p className="font-light text-sm">{title}</p>
        </div>
      </div>
      <div></div>
      <p className="font-light text-sm block mt-auto mb-auto">{id}</p>
      <p className="font-light text-sm block mt-auto mb-auto">{joinDate}</p>
    </TableRow>
  );
}

export default EmployeeRow;
