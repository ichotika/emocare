import Link from "next/link";

export default function Navbar() {
  return (
    // redesign
    <nav className="flex justify-between items-center ">
        <Link className="text-2xl font-bold" href={"/"}>EmoCare</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={"/addUser"}>Add Topic</Link>
    </nav>
  )
}


