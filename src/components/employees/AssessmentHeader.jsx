"use client";
import Header from "@/components/employees/Header";

const AssessmentHeader = ({ headerText1, headerText2, description }) => {
    return (
        <>
            <div className="flex flex-wrap justify-between pt-8">
                <p className="block w-full text-b-lg font-bold">
                    {headerText1}
                </p>
                <Header headertext={headerText2} marginTB="mt-1 mb-1" />
                <p className="mt-4 basis-3/5 text-justify text-b-lg font-bold xl:basis-full">
                    {description}
                </p>
            </div>
        </>
    );
};

export default AssessmentHeader;
