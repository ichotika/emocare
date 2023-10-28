"use client";

import {SignUp} from "@clerk/nextjs";

// Redesign to take orgName from URL params
export default function FinalSignUpPage({ orgName }) {
    return (
        <div className="grid lg:grid-cols-3">
            <div className="col-span-2 hidden rounded-2xl bg-[url('https://images.unsplash.com/photo-1560249956-b3731ecf3153')] bg-cover bg-center lg:block"></div>
            <div className="col-start-3 col-end-3 -ml-16">
                <SignUp unsafeMetadata={{ organization: orgName }} />
            </div>
        </div>
    );
}