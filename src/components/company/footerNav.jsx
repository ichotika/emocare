import Link from "next/link";
import Image from "next/image";
import emocareLogo from "@/public/assets/Wireframes/EmoCare_logo 1.svg";


export default function Footer({routes}) {

    return (
        <footer className={"flex flex-col items-center gap-8"}>
            <Image height={50} src={emocareLogo} alt="Emocare Logo"/>
            <ul className={"flex flex-row gap-4"}>
                {routes.map((route,index) => <Link key={index} className={"block"} href={`/company/${route.slug}`}>{route.name}</Link>)}
            </ul>
            <p>Emocare &copy; 2023. All rights reserved. </p>
        </footer>
    )
}