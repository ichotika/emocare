"use client";
import SignUpUI from "@/components/sign-up/SignUpUI";
import FinalSignUpPage from "@/components/sign-up/FinalSignUpPage";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function Page() {
    const [finalOrg,setFinalOrg] = useState("");
    const pathname = usePathname();
    
    console.log(pathname);

    const handleOrgDecide = (orgName) => {
        setFinalOrg(orgName);
    }

    console.log("equals sign-up", pathname==="/sign-up");
    return pathname!=="/sign-up" || finalOrg?<FinalSignUpPage orgName={finalOrg}></FinalSignUpPage>:<SignUpUI onOrgDecide={handleOrgDecide}></SignUpUI>;
}


