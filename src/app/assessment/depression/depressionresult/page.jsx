"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import Link from "next/link";
import MainBtn from "@/components/base/MainBtn";


const DepressionResultPage = () => {
    return (  
        <>
            <AssessmentResult/>
            {/* <MainBtn buttontext="Take another assessment" bgColor="bg-blue-700" textColor="text-white" handleClick={}, link=""></MainBtn> */}
            <Link className="bg-blue-700 text-white rounded-lg p-2" href={"/assessment"}>Take other assessment</Link>
        </>
    );
}
 
export default DepressionResultPage;