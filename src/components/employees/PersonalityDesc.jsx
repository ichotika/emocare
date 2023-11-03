import Image from "next/image";
import Profile from "@/public/assets/Wireframes/bell.svg";
import Link from "next/link";

function PersonalityDesc({personalityDesc}) {
    return (
        <div className="m-2 rounded-lg bg-white p-4">
            <h1 className="font-bold">{personalityDesc.personality}</h1>
            <div className="flex justify-center py-4">
                {/* <Image src={Profile} width={100} height={100} alt="Picture" /> */}
                <div className="w-[7rem] h-[7rem] bg-slate-300 rounded"></div>
            </div>
            <div>
                <h2 className="font-semibold py-2">{personalityDesc.type}</h2>
                <p className="text-left">
                    {personalityDesc.desc}
                </p>
                <div className="pt-6 text-center font-semibold">
                    <Link href={{pathname:`http://localhost:3000/employees/personality`, query: { type: personalityDesc.type}}}>Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonalityDesc;
