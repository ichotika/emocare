import Link from "next/link";

function NoResultChart({ mainTitle, link }) {
    return (
        <div className="p-2 grow flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-white text-center text-lg">
            <h1 className="m-1 font-bold">{mainTitle}</h1>
            <div className="p-2">
                <p className="pb-2 font-bold text-slate-400 sm:hidden">No result</p>
                <button className="rounded-lg bg-blue-700 p-2 text-white hover:bg-blue-500">
                    <Link href={link}>Take Assessment</Link>
                </button>
            </div>
        </div>
    );
}

export default NoResultChart;
