import Link from "next/link";
import { Logout } from "@clerk/nextjs";

const Logout = () => {
    return (  
        <button className="text-red-600 rounded-sm px-8 py-2"><Link href="/">Logout</Link></button>
    );
}
 
export default Logout;