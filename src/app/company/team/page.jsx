import TeamCard from "@/app/company/team/TeamCard";

const members = [
    {
        name: "Krisana Arunyamitanon",
        designation: "Full Stack Developer",
        personality: "Virtuoso",
        imageName: "Kris.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#80B1FC]",
    },

    {
        name: "Sejal More",
        designation: "UX/UI Designer",
        personality: "Adventurer",
        imageName: "Sejal.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#BDA6FF]",
    },
    {
        name: "Akiko Kato",
        designation: "UX/UI Designer",
        personality: "Architect",
        imageName: "Akiko.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#FFA4E0]",
    },
    {
        name: "Hritik Sharma",
        designation: "UX/UI Designer",
        personality: "Protagonist",
        imageName: "Hritik.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#FFCB62]",
    },
    {
        name: "Hridya Unnikrishnan",
        designation: "Full Stack Developer",
        personality: "Adventurer",
        imageName: "Hridya.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#FF9E9E]",
    },
    {
        name: "Kimitoshi Nakaya",
        designation: "Full Stack Developer",
        personality: "Protagonist",
        imageName: "Kimi.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#D8F086]",
    },
    {
        name: "Anh Phan Nguyen",
        designation: "Full Stack Developer",
        personality: "Adventurer",
        imageName: "Anh.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#F39561]",
    },
    {
        name: "Chotika Imvimol",
        designation: "Full Stack Developer",
        personality: "Logistician",
        imageName: "Chotika.webp",
        LinkedInURL: "https://google.com",
        hoverBG: "hover:bg-[#70CCA5]",
    },
];

function Page() {
    return (
        <>
            <header className={"text-center"}>
                <h1 className={"font-sans text-5xl"}>Meet Our Team</h1>
                <p>
                    Introducing our dynamic team purple where the fusion of 5
                    skilled developers and 3 visionary designers forms the
                    backbone of EmoCare.
                </p>
            </header>
            <main>
                <ul
                    className={
                        "grid grid-cols-4 gap-y-7 lg:grid-cols-3 sm:grid-cols-2"
                    }
                >
                    {members.map((member) => (
                        <li key={member.name}>
                            <TeamCard member={member}></TeamCard>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Page;
