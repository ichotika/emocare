"use client";
import Logo from "@/public/assets/Wireframes/EmoCare_logo 1.svg"
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";


const EmployeeSidebar = () => {
    return (
        // display: flex, flex: space between
        <>
            <div className="flex flex-col min-h-full text-blue-700  justify-between">
                <header className="p-5">
                    <h1 className="py-3 px-2 mb-6">Emocare</h1>
                    <nav>
                        <ul>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white"><Link href="/employees/dashboard">Dashboard </Link></li>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white"><Link href="/assessment">Assessment</Link></li>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white"><Link href="/education">Education</Link></li>
                            <li className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white"><Link href="/emergency">Emergency Calling</Link></li>
                            {/* <Image src={Dashboard}  width={24} height={24} alt="dashboard icon" />
                                <Image src={Assessment} width={24} height={24} alt="assessment icon" />
                                <Image src={Education} width={24} height={24} alt="education icon" />
                                <Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />*/}
                        </ul>
                    </nav>
                </header>

                <footer className="p-5">
                    <div className="py-3 px-2 rounded-lg hover:bg-blue-700 hover:text-white" >
                        <SignOutButton />
                    </div>
                </footer>
            </div>
        </>
    );
};

export default EmployeeSidebar;
