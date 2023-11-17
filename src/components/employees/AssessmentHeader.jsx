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
            <div className="flex flex-wrap justify-between pt-8 gap-11">
                <div className="flex flex-col">
                    <p className="block w-full text-b-lg font-bold">
                        {headerText1}
                    </p>
                    <Header headertext={headerText2} marginTB="mt-1 mb-1" />
                </div>
                <p className="basis-4/5 xl:grow text-justify text-b-lg font-bold">
                    {description}
                </p>
            </div>
        </>
    );
};

export default AssessmentHeader;
