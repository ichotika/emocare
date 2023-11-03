"use client";
import AssessmentResult from "@/components/assessment/mentalassessment/AssessmentResult";
import Link from "next/link";


const BurnoutResultPage = () => {
    return (  
        <>
            <AssessmentResult/>
            <Link className="bg-blue-700 text-white rounded-lg p-2" href={"/assessment"}>Take other assessment</Link>
        </>
    );
}
 
export default BurnoutResultPage;