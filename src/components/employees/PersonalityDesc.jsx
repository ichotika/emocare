import Link from "next/link";
import PersonalityImage from "./PersonalityImage";

function PersonalityDesc({ personalityDesc }) {
    return (
        <div className="h-[100%] rounded-lg bg-white p-4">
            <h1 className="text-b-lg font-bold">
                {personalityDesc.personality}
            </h1>
            <div className="px-4 sm:flex">
                <PersonalityImage
                    personality={personalityDesc.personality}
                    imgWidth={175}
                    imgHeight={175}
                />
                <div className="sm:flex sm:w-2/3 sm:flex-col sm:justify-center">
                    <p className="py-2 text-b-lg font-bold">
                        {personalityDesc.type}
                    </p>
                    <p className="excerpt text-left sm:hidden">
                        {personalityDesc.longdesc}
                    </p>
                    <p className="hidden text-left sm:block">
                        {personalityDesc.longdesc.substring(0, 100) + "..."}
                    </p>
                    <div className="pt-2 text-center font-semibold sm:flex sm:justify-end">
                        <Link
                            href={{
                                pathname: `/employees/assessment/personality/detail`,
                                query: { type: personalityDesc.type },
                            }}
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalityDesc;
