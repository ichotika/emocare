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
                            <li><Link href="#">Dashboard </Link></li>
                            <li><Link href="/assessmentRerd">Assessment Record</Link></li>
                            <li><Link href="/organization/management">Management</Link></li>
                            {/* <li><Link href={`/dashboard`}><Image src={Dashboard}  width={24} height={24} alt="dashboard icon" />Dashboard</Link></li>
                        <li><Link href={`/assessment`}><Image src={Assessment} width={24} height={24} alt="assessment icon" />Assessment Records</Link></li>
                        <li><Link href={`/education`}><Image src={Education} width={24} height={24} alt="education icon" />Education</Link></li>
    <li><Link href={`/emergencysupport`}><Image src={EmergencySupport} width={24} height={24} alt="emergency support icon" />Emergency Support</Link></li> */}
                        </ul>
                    </nav>
                </header>

                <footer>
                    <nav>
                        <ul>
                            <li><button><Link href={`singin`}>Log Out</Link></button></li>
                        </ul>
                    </nav>
                </footer>
            </div>


        </>
    );
};

export default OrganizationSidebar;
