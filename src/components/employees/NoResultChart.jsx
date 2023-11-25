import Link from "next/link";

function NoResultChart({ mainTitle, link }) {
    return (
        <div className="flex h-[100%] flex-col items-center gap-4 rounded-lg bg-white text-center text-lg sm:flex-row">
            <h1 className="text-start font-bold sm:w-1/3">{mainTitle}</h1>
            <div className="flex h-[226px] w-[226px] flex-col justify-between sm:w-2/3">
                <div></div>
                <p className="pb-2 font-bold text-g-gray-1 sm:hidden">
                    No result
                </p>
                <button className="-mt-16 rounded-lg bg-p-blue-1 p-2 font-medium text-white hover:bg-p-blue-2">
                    <Link href={link}>Take Assessment</Link>
                </button>
            </div>
        </div>
    );
}

export default NoResultChart;
