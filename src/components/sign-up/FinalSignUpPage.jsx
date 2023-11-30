"use client";

import { SignUp } from "@clerk/nextjs";
// Redesign to take orgName from URL params
export default function FinalSignUpPage({ orgName, deptName, desigName }) {
    return (
        <SignUp
            unsafeMetadata={{
                organization: orgName,
                role: "employee",
                department: deptName,
                designation: desigName,
                approved: false,
            }}
        />
    );
}
