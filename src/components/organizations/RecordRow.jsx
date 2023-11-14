"use client";
import Image from "next/image";
import styled from "styled-components";
import anonymous from "@/public/assets/organization/user.svg";
const TableRow = styled.div`
    display: grid;
    grid-template-columns: 6% 30% 16% 16% 16% 16%;
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
    text-align: center;
    font-size: 0.875rem;
    font-weight: 300;
`;
const handleButtonClick = async (id, assessmentType) => {
    try {
        const response = await fetch(`/api/notification/employee/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: id,
                timestamp: new Date().toISOString(),
                isRead: false,
                assessmentType: assessmentType,
            }),
        });
    } catch (error) {
        console.error("Error updating notification:", error);
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
            <p className="border-p-blue-6 mb-auto mt-auto block border-r-2 py-3 text-sm font-light">
                {title}
            </p>
            <p className="border-p-blue-6 mb-auto mt-auto block border-r-2 py-3 text-center text-sm font-light">
                {assessmentType}
            </p>
            {scoreCur === "Good" ? (
                <StyledParagraph className="border-b-2 border-o-success-1 bg-o-success-2">
                    {scoreCur}
                </StyledParagraph>
            ) : scoreCur === "Moderate" ? (
                <StyledParagraph className="bg-o-joy-2 border-b-2 border-o-joy-1">
                    {scoreCur}
                </StyledParagraph>
            ) : scoreCur === "Critical" ? (
                <StyledParagraph className="bg-o-error-2 border-b-2 border-o-error-1">
                    {scoreCur}
                </StyledParagraph>
            ) : (
                <StyledParagraph>{scoreCur}</StyledParagraph>
            )}
            {scorePrev === "Good" ? (
                <StyledParagraph className="border-b-2 border-o-success-1 bg-o-success-2">
                    {scorePrev}
                </StyledParagraph>
            ) : scorePrev === "Moderate" ? (
                <StyledParagraph className="bg-o-joy-2 border-b-2 border-o-joy-1">
                    {scorePrev}
                </StyledParagraph>
            ) : scorePrev === "Critical" ? (
                <StyledParagraph className="bg-o-error-2 border-b-2 border-o-error-1">
                    {scorePrev}
                </StyledParagraph>
            ) : (
                <StyledParagraph>{scorePrev}</StyledParagraph>
            )}
            {scorePrev === "Not Taken" && scoreCur === "Not Taken" ? (
                <button
                    className="m-auto block w-1/2 rounded-md bg-p-blue-1 p-1 text-center text-sm font-bold text-white"
                    onClick={() => handleButtonClick(id, assessmentType)}
                >
                    Notify
                </button>
            ) : (
                <button
                    className="bg-p-blue-5 m-auto block w-1/2 rounded-md p-1 text-center text-sm font-bold text-g-gray-1"
                    onClick={() => handleButtonClick(id, assessmentType)}
                    disabled
                >
                    Taken
                </button>
            )}
        </TableRow>
    );
}

export default OrganizationRow;
