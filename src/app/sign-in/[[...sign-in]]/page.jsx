import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Bg from "@/public/assets/loginCard.png";
export default function Page() {
    return (
        <div className="grid h-screen w-screen grid-cols-2 lg:grid-cols-1">
            <Image
                src={Bg}
                alt="Background"
                objectFit="cover"
                quality={100}
                className=" h-full w-full"
            />
            <div className="flex h-full w-full items-center justify-center">
                <SignIn />
            </div>
        </div>
    );
}
