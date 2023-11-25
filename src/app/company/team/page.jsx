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
        <main
            className={"flex flex-col content-center gap-10 px-20 pb-20 pt-10"}
        >
            <header className={"flex flex-col items-center gap-5 text-center"}>
                <h1 className={"font-archivo text-5xl font-semibold"}>
                    Meet Our Team
                </h1>
                <p className={"max-w-4xl font-manrope text-xl"}>
                    Introducing our dynamic team purple where the fusion of 5
                    skilled developers and 3 visionary designers forms the
                    backbone of EmoCare.
                </p>
            </header>
            <section>
                <ul
                    className={
                        "grid grid-cols-4 gap-y-7 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                    }
                >
                    {members.map((member) => (
                        <li key={member.name} className={"grid justify-center"}>
                            <TeamCard member={member}></TeamCard>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Page;
