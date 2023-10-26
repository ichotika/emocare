import SignUpUI from "@/components/sign-up/SignUpUI";
import FinalSignUpPage from "@/components/sign-up/FinalSignUpPage";
import { useState } from "react";

export default function Page() {
    const [finalOrg,setFinalOrg] = useState("");

    const handleOrgDecide = (orgName) => {
        setFinalOrg(orgName);
    }

    return finalOrg?<SignUpUI onOrgDecide={handleOrgDecide}></SignUpUI>:<FinalSignUpPage orgName={finalOrg}></FinalSignUpPage>;
}


