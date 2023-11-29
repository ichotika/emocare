import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Bg from "@/public/assets/loginCard.png";
export default function Page() {
    return (
        <SignIn />
    );
}
