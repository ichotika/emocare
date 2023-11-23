import Link from "next/link";
import PersonalityImage from "./PersonalityImage";

function PersonalityDesc({ personalityDesc }) {
    
    return (
        <div className="rounded-lg bg-white h-[100%] p-2">
            <h1 className="font-bold text-b-lg">{personalityDesc.personality}</h1>
            <div className="sm:flex px-4">
                <PersonalityImage personality={personalityDesc.personality} imgWidth={400} imgHeight={400} />
                <div className="sm:w-2/3 sm:flex sm:flex-col sm:justify-center">
                    <p className="py-2 font-bold text-b-lg">{personalityDesc.type}</p>
                    <p className="text-left sm:hidden">{personalityDesc.longdesc}</p>
                    <p className="text-left hidden sm:block">{personalityDesc.longdesc.substring(0,100)+"..."}</p>
                    <div className="pt-6 text-center font-semibold sm:flex sm:justify-end">
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
