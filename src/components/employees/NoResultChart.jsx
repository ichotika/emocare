import Link from "next/link";

function NoResultChart({ mainTitle, link }) {
    return (
        <div className="p-2 flex flex-col sm:flex-row items-center gap-4 rounded-lg bg-white text-center h-[100%] text-lg">
            <h1 className="m-1 pl-2 text-start font-bold sm:w-1/3">{mainTitle}</h1>
            <div className="p-2 w-[100%] h-[100%] sm:w-2/3 flex flex-col justify-evenly">
                <p className="pb-2 font-bold text-g-gray-1 sm:hidden">No result</p>
                <button className="rounded-lg bg-blue-700 p-2 text-white hover:bg-blue-500">
                    <Link href={link}>Take Assessment</Link>
                </button>
            </div>
        </div>
    );
}

export default NoResultChart;
