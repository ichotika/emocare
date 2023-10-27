"use client";
import SignUpUI from "@/components/sign-up/SignUpUI";
import FinalSignUpPage from "@/components/sign-up/FinalSignUpPage";
import { useState } from "react";

export default function Page() {
    console.log("ON SIGNUP PAGE");
    const [finalOrg,setFinalOrg] = useState("");

    const handleOrgDecide = (orgName) => {
        setFinalOrg(orgName);
    }

    return finalOrg?<FinalSignUpPage orgName={finalOrg}></FinalSignUpPage>:<SignUpUI onOrgDecide={handleOrgDecide}></SignUpUI>;
}


