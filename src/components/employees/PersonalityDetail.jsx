import Image from "next/image";
import Profile from "@/public/assets/Wireframes/bell.svg";
import Link from "next/link";

function PersonalityDetail({personality}) {
    console.log(personality)
  return (
    <>
        <div className="m-4 p-4 grid grid-cols-3">
            <div className="flex justify-center items-start">
                {/* <Image src={Profile} width={100} height={100} alt="Picture" /> */}
                <div className="w-[10rem] h-[10rem] bg-slate-400 rounded"></div>
            </div>
            <div className="col-span-2 px-8">
                <h1 className="font-bold pb-4">Your personality is {personality.type}</h1>
                <p>{personality.longdesc}</p>
                <p className="pt-8">For more information, visit <Link href={`https://www.16personalities.com/${personality.type}-personality`} target={'_blank'}>16 personalities</Link>.</p>
                <div className="flex justify-end pt-6">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white p-2 rounded-lg"><Link href={`http://localhost:3000/employees/dashboard`}>Go back to dashboard</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PersonalityDetail