import Image from "next/image";
import Profile from "@/public/assets/Wireframes/bell.svg";

function PersonalityType() {
    return (
        <div className="m-1 rounded-lg bg-white p-1 text-center">
            <h1>Your Personality Type</h1>
            <Image src={Profile} width={100} height={100} alt="Picture" />
            <div>
                <h2>Personality 1</h2>
                <p className="text-left">
                    Qui dolore laboriosam qui dolor nostrum et impedit dolores
                    sit aspernatur tempore qui voluptate neque eos dignissimos
                    nostrum.
                </p>
                <p className="pt-6 text-center">View All</p>
            </div>
        </div>
    );
}

export default PersonalityType;
