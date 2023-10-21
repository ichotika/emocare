import MainBtn from "../base/MainBtn";
import Image from "next/image";
import Profile from "@/public/assets/Wireframes/bell.svg";

function NoPersonalityResult() {
    return (
        <div className="m-1 rounded-lg bg-white p-1 text-center">
            <h1>Your Personality Type</h1>
            <Image src={Profile} width={100} height={100} alt="Picture" />
            <div className="grid gap-2 p-2 font-bold">
                <p className="text-slate-400">
                    You have not taken personality test yet.
                </p>
                <MainBtn
                    buttontext={"Take Test"}
                    bgColor={"bg-blue-700"}
                    textColor={"text-white"}
                />
            </div>
        </div>
    );
}

export default NoPersonalityResult;
