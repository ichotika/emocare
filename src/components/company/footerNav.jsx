import Link from "next/link";
import Image from "next/image";
import MobileLogo from "@/public/icons/logo_mobile.svg";

export default function Footer({ routes }) {
    return (
        <footer
            className={
                "flex flex-col items-center gap-8 bg-g-black-1 px-12 py-10 text-g-white-1"
            }
        >
            <Link href={"/company"}>
                <Image width={162} src={MobileLogo} alt="Emocare Logo" />
            </Link>
            <ul className={"flex flex-row gap-6"}>
                {routes.map((route, index) => (
                    <Link
                        key={index}
                        className={"block px-2 py-3"}
                        href={`/company/${route.slug}`}
                    >
                        {route.name}
                    </Link>
                ))}
            </ul>
            <hr className={"h-0 w-full border-t border-t-[rgb(45,45,45)]"} />
            <p>&copy;2023 Emocare. All rights reserved. </p>
        </footer>
    );
}
