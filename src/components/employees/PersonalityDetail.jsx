import Image from "next/image";
import Profile from "@/public/assets/Wireframes/bell.svg";
import Link from "next/link";

function PersonalityDetail({ personality }) {
    console.log(personality);
    return (
        <>
            <div className="m-4 grid grid-cols-3 p-4">
                <div className="flex items-start justify-center">
                    {/* <Image src={Profile} width={100} height={100} alt="Picture" /> */}
                    <div className="h-[10rem] w-[10rem] rounded bg-slate-400"></div>
                </div>
                <div className="col-span-2 px-8">
                    <h1 className="pb-4 font-bold">
                        Your personality is {personality.type}
                    </h1>
                    <p>{personality.longdesc}</p>
                    <p className="pt-8">
                        For more information, visit{" "}
                        <Link
                            href={`https://www.16personalities.com/${personality.type}-personality`}
                            target={"_blank"}
                        >
                            16 personalities
                        </Link>
                        .
                    </p>
                    <div className="flex justify-end pt-6">
                        <button className="rounded-lg bg-blue-700 p-2 text-white hover:bg-blue-500">
                            <Link href={`/employees`}>
                                Go back to dashboard
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalityDetail;
