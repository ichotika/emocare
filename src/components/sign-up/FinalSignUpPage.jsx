"use client";

import { SignUp } from "@clerk/nextjs";

// Redesign to take orgName from URL params
export default function FinalSignUpPage({ orgName, deptName, desigName }) {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-1">
            <div className="col-span-2 rounded-2xl bg-[url('https://images.unsplash.com/photo-1560249956-b3731ecf3153')] bg-cover bg-center sm:hidden"></div>
            <div className="col-start-3 col-end-3 -ml-16">
                <SignUp
                    unsafeMetadata={{
                        organization: orgName,
                        role: "employee",
                        department: deptName,
                        designation: desigName,
                        approved: false,
                    }}
                />
            </div>
        </div>
    );
}
