import Link from "next/link";
import PersonalityImage from "./PersonalityImage";

function PersonalityDesc({ personalityDesc }) {
    
    return (
        <div className="rounded-lg bg-white h-[100%] p-4">
            <h1 className="font-bold text-b-lg">{personalityDesc.personality}</h1>
            <div className="sm:flex">
                <PersonalityImage personality={personalityDesc.personality} imgWidth={400} imgHeight={400} />
                <div className="sm:w-2/3 sm:flex sm:flex-col sm:justify-center">
                    <h2 className="py-2 font-semibold">{personalityDesc.type}</h2>
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
