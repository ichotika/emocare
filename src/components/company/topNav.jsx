import Link from "next/link";
import Image from "next/image";


export default function TopNav({routes}) {

    return (<nav className={"flex flex-row items-center justify-between"}>
        <Image src="/public/assets/Wireframes/EmoCare_logo 1.svg" alt="Emocare Logo"/>
        <div className={"flex flex-row gap-8"}>
            <ul className={"flex flex-row gap-4"}>
                {routes.map(route => <Link className={"block"} href={`/company/${route.slug}`}>{route.name}</Link>)}
            </ul>
            <div className={"flex flex-row gap-2"}>
                <Link href={"/sign-in"}>
                    Member Login
                </Link>
                <button>
                    Request a Demo
                </button>
            </div>
        </div>

    </nav>)
}