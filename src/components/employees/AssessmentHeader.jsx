"use client";
import Header from "@/components/employees/Header";

const AssessmentHeader = ({
    headerText1,
    headerText2,
    description,
    isHidden = false,
}) => {
    return (
        <>
            <div className="flex flex-wrap justify-between gap-11 pt-8">
                <div className="flex w-full flex-col">
                    <p className="block w-full text-b-lg font-bold">
                        {headerText1}
                    </p>
                    <Header headertext={headerText2} marginTB="mt-1 mb-1" />
                </div>
                <p className="basis-4/5 text-justify text-b-lg font-bold xl:grow">
                    {description}
                </p>
            </div>
        </>
    );
};

export default AssessmentHeader;
