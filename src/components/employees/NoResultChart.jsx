import Link from "next/link";

function NoResultChart({ mainTitle, assessLink }) {
    return (
        <div className="grid-row-2 grid gap-4 rounded-lg bg-white text-center text-lg">
            <h1 className="m-1 font-bold">{mainTitle}</h1>
            <div className="p-2">
                <p className="pb-2 font-bold text-slate-400">No result</p>
                <button className="bg-blue-700 hover:bg-blue-500 text-white p-2 rounded-lg">
                    <Link href={assessLink}>Take Assessment</Link>
                </button>
            </div>
        </div>
    );
}

export default NoResultChart;
