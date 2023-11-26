import Link from "next/link";

function NoResultChart({ mainTitle, link }) {
    return (
        <div className="flex h-[100%] flex-col items-center justify-between gap-4 rounded-lg bg-white text-center text-lg">
            <p className="text-center text-b-lg font-bold">{mainTitle}</p>
            <div className="">
                <p className="flex justify-center font-bold text-g-gray-1">
                    No result
                </p>
            </div>
            <button className="w-[206px] rounded-lg bg-p-blue-1 p-2 font-medium text-white hover:bg-p-blue-2">
                <Link href={link}>Take Assessment</Link>
            </button>
        </div>
    );
}

export default NoResultChart;
