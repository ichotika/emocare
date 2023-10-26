"use client";
import Logo from "@/public/assets/Wireframes/EmoCare_logo 1.svg"
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";


const EmployeeSidebar = () => {
    return (
        // display: flex, flex: space between
        <>
            <div className="flex flex-col min-h-full bg-blue-700 justify-between text-white">
                <header className="p-5">
                    <h1>Emocare</h1>
                    <nav>
                        <ul>
                            <li className="py-5"><Link href="/employees/dashboard">Dashboard </Link></li>
                            <li className="py-5"><Link href="/assessment">Assessment</Link></li>
                            <li className="py-5"><Link href="/education">Education</Link></li>
                            <li className="py-5"><Link href="/emergency">Emergency Calling</Link></li>
                            {/* <Image src={Dashboard}  width={24} height={24} alt="dashboard icon" />
                                <Image src={Assessment} width={24} height={24} alt="assessment icon" />
                                <Image src={Education} width={24} height={24} alt="education icon" />
                                <Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />*/}
                        </ul>
                    </nav>
                </header>

                <footer className="p-5">
                    <nav>
                        <ul>
                            <button className="bg-red-700"><Link href="/sign-in">Log Out</Link></button>
                            <SignOutButton />
                        </ul>
                    </nav>
                </footer>
            </div>
        </>
    );
};

export default EmployeeSidebar;
