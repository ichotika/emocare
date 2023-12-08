import Image from "next/image";
import Bg from "/public/authentication/LoginCard.webp";


export default function Layout({ children }) {
    return (
        <div className="grid h-screen w-screen grid-cols-2 lg:grid-cols-1">
            <Image
                src={Bg}
                alt="Background"
                className="h-full w-full lg:hidden object-cover"
            />
            <div className="flex h-full w-full items-center justify-center">
                {children}
            </div>
        </div>
    );
}