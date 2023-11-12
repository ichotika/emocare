"use client";
import Image from "next/image";
import styled from "styled-components";
import anonymous from "@/public/assets/organization/user.svg";
const TableRow = styled.div`
    display: grid;
    grid-template-columns: 5% 25% 15% 15% 15% 15%;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-grey-200);
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 0.75rem 0;
`;


const handleButtonClick = async (id, assessmentType) => {

    try {
       
        const response = await fetch(`/api/notification/employee/${id}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                userid: id, 
                timestamp:new Date().toISOString(),
                isRead: false,
                assessmentType: assessmentType}),
          });

    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

function OrganizationRow({
    title,
    id,
    joinDate,
    scoreCur,
    scorePrev,
    assessmentType,
}) {
    
    return (
        <TableRow>
            <div className="flex items-center justify-end">
                <Image
                    className="rounded-full"
                    src={anonymous}
                    width={24}
                    height={24}
                    alt="Profile picture"
                />
            </div>
            <div>
                <p className="text-sm font-light">{title}</p>
            </div>

            <p className="mb-auto mt-auto block text-center text-sm font-light">
                {assessmentType}
            </p>
            <p className="mb-auto mt-auto block text-center text-sm font-light">
                {scoreCur}
            </p>
            <p className="mb-auto mt-auto block text-center text-sm font-light">
                {scorePrev}
            </p>

            <button className="m-auto block w-1/2 rounded-md bg-blue-600 p-1 text-center text-sm font-light text-white" onClick={() => handleButtonClick(id, assessmentType)}>
                Notify
            </button>
        </TableRow>
    );
}

export default OrganizationRow;
