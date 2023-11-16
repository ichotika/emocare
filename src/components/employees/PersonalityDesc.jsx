import Image from "next/image";
import Profile from "@/public/assets/Wireframes/bell.svg";
import Link from "next/link";

function PersonalityDesc({ personalityDesc }) {
    return (
        <div className="rounded-lg bg-white h-[100%] p-4">
            <h1 className="font-bold">{personalityDesc.personality}</h1>
            <div className="flex justify-center py-4">
                {/* <Image src={Profile} width={100} height={100} alt="Picture" /> */}
                <div className="h-[7rem] w-[7rem] rounded bg-slate-300"></div>
            </div>
            <div>
                <h2 className="py-2 font-semibold">{personalityDesc.type}</h2>
                <p className="text-left">{personalityDesc.desc}</p>
                <div className="pt-6 text-center font-semibold">
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
    );
}

export default PersonalityDesc;
