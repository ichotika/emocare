"use client";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Bg from "@/public/assets/loginCard.png";
// Redesign to take orgName from URL params
export default function FinalSignUpPage({ orgName, deptName, desigName }) {
    return (
        <div className="grid h-screen w-screen grid-cols-2 lg:grid-cols-1">
            <Image
                src={Bg}
                alt="Background"
                objectFit="cover"
                quality={100}
                className=" h-full w-full"
            />
            <div className="flex h-full w-full items-center justify-center">
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
