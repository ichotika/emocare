import Link from "next/link";
import Image from "next/image";


export default function Footer({routes}) {

    return (
        <footer className={"flex flex-col items-center gap-8"}>
            <Image src="/public/assets/Wireframes/EmoCare_logo 1.svg" alt="Emocare Logo"/>
            <ul className={"flex flex-row gap-4"}>
                {routes.map(route => <Link className={"block"} href={`/company/${route.slug}`}>{route.name}</Link>)}
            </ul>
            <p>Emocare &copy; 2023. All rights reserved. </p>
        </footer>
    )
}