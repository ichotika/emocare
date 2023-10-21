"use client";
import Logo from "@/public/assets/Wireframes/EmoCare_logo 1.svg"
import Link from "next/link";

const OrganizationSidebar = () => {
    return (
        // display: flex, flex: space between
        <>
            <div className="flex flex-col bg-blue-700 justify-between text-white">
                <header>
                    <h1>Emocare</h1>
                    <nav>
                        <ul>
                            <li><Link href="/organization">Dashboard </Link></li>
                            <li><Link href="/organization/assessmentRecord">Assessment Record</Link></li>
                            <li><Link href="/organization/management">Management</Link></li>
                            {/* <Image src={Dashboard}  width={24} height={24} alt="dashboard icon" />
                                <Image src={Assessment} width={24} height={24} alt="assessment icon" />
                                <Image src={Education} width={24} height={24} alt="education icon" />
                                <Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />*/}
                        </ul>
                    </nav>
                </header>

                <footer>
                    <nav>
                        <ul>
                            <button className="bg-red-700"><Link href="/sign-in">Log Out</Link></button>
                        </ul>
                    </nav>
                </footer>
            </div>


        </>
    );
};

export default OrganizationSidebar;
