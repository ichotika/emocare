import Link from "next/link";

function NoResultChart({ mainTitle, link }) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 rounded-lg bg-white text-center h-[100%] text-lg">
            <h1 className="text-start font-bold sm:w-1/3">{mainTitle}</h1>
            <div className="w-[100%] h-[100%] sm:w-2/3 flex flex-col justify-between">
                <div></div>
                <p className="pb-2 font-bold text-g-gray-1 sm:hidden">No result</p>
                <button className="rounded-lg bg-p-blue-1 p-2 text-white font-medium hover:bg-p-blue-2">
                    <Link href={link}>Take Assessment</Link>
                </button>
            </div>
        </div>
    );
}

export default NoResultChart;
