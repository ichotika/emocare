"use client";
import SignUpUI from "@/components/sign-up/SignUpUI";
import FinalSignUpPage from "@/components/sign-up/FinalSignUpPage";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Page() {
    const [finalOrg, setFinalOrg] = useState("");
    const [finalDept, setFinalDept] = useState("");
    const [finalDesig, setFinalDesig] = useState("");
    const pathname = usePathname();

    const handleOrgDecide = (orgName) => {
        setFinalOrg(orgName);
    };
    const handleDeptDecide = (deptName) => {
        setFinalDept(deptName);
    };
    const handleDesigDecide = (designName) => {
        setFinalDesig(designName);
    };
    return pathname !== "/sign-up" || finalOrg ? (
        <FinalSignUpPage
            orgName={finalOrg}
            deptName={finalDept}
            desigName={finalDesig}
        ></FinalSignUpPage>
    ) : (
        <SignUpUI
            onOrgDecide={handleOrgDecide}
            onDeptDeicde={handleDeptDecide}
            onDesignDecide={handleDesigDecide}
        ></SignUpUI>
    );
}
