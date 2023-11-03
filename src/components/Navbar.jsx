import Link from "next/link";

export default function Navbar() {
    return (
        // redesign
        <nav className="flex items-center justify-between ">
            <Link className="text-2xl font-bold" href={"/"}>
                EmoCare
            </Link>
        </nav>
    );
}
