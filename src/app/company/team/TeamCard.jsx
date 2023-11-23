import { FaLinkedinIn } from "react-icons/fa";
export default function TeamCard({ member }) {
    const { name, designation, personality, imageName, LinkedInURL, hoverBG } =
        member;
    return (
        <article
            className={`group relative h-[400px] max-w-[300px] rounded-3xl border-4 border-white bg-[#F5F9FF] shadow-sm ${hoverBG} hover:bg-[url('/company_site/teamcard_background.svg')]`}
        >
            <img
                className={"h-full w-full object-cover"}
                src={`/company_site/team_photos/${imageName}`}
                alt={name}
            />
            <div
                className={
                    "absolute inset-0 grid grid-cols-6 grid-rows-4 p-4 lg:p-3 sm:p-2"
                }
            >
                <div
                    className={
                        "col-span-full row-start-4 row-end-5 rounded bg-white p-4 lg:p-3 sm:p-2"
                    }
                >
                    <h2 className={"text-xl font-bold"}>{name}</h2>
                    <p className={"group-hover:hidden"}>{designation}</p>
                    <p className={"hidden group-hover:block"}>
                        Personality:{" "}
                        <strong className={"font-bold"}>{personality}</strong>
                    </p>
                </div>
                <a href={LinkedInURL} className={"text-3xl"}>
                    <FaLinkedinIn
                        aria-label={"LinkedIn Profile"}
                        color={"#0077B5"}
                    />
                </a>
            </div>
        </article>
    );
}
