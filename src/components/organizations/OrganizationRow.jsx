"use client";
import Image from "next/image";
import styled from "styled-components";
import anonymous from "@/public/assets/organization/user.svg";
const TableRow = styled.div`
    display: grid;
    grid-template-columns: 5% 35% 30% 30%;
    align-items: center;
    justify-content: start;
    font-size: 12px;
    background-color: var(--color-white);
    border-bottom: 2px solid #f5f9ff;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
`;
const StyledParagraph = styled.p`
    margin-bottom: auto;
    margin-top: auto;
    display: block;
    border-right: 2px solid;
    border-right-color: #f5f9ff;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: left;
    font-size: 0.875rem;
    font-weight: 300;
`;
const StyledParagraphLeft = styled.p`
    margin-bottom: auto;
    margin-top: auto;
    display: block;
    border-right: 2px solid;
    border-right-color: #f5f9ff;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 300;
`;
function OrganizationRow({ title, id, joinDate }) {
    return (
        <TableRow>
            <div className="mb-auto mt-auto flex items-center justify-end">
                <div className="bg-p-blue-6 me-2 rounded-full p-2">
                    <Image
                        src={anonymous}
                        width={24}
                        height={24}
                        alt="Profile picture"
                    />
                </div>
            </div>
            <StyledParagraph className="">{title}</StyledParagraph>
            <StyledParagraphLeft className="flex">{id}</StyledParagraphLeft>
            <StyledParagraphLeft className="flex">
                {joinDate}
            </StyledParagraphLeft>
        </TableRow>
    );
}

export default OrganizationRow;
