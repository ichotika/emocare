import Link from "next/link";

function NoPersonalityResult({ personalityLink }) {
    return (
        <div className="m-2 flex h-[20vw] flex-col justify-between gap-4 rounded-lg bg-white p-4">
            <h1 className="font-bold">Your Personality Type</h1>
            <div className="flex h-[20vw] flex-col justify-between gap-2 p-2 text-center font-bold">
                <p className="text-slate-400">
                    You have not taken personality test yet.
                </p>
                <button className="rounded-lg bg-blue-700 p-2 text-white hover:bg-blue-500">
                    <Link href={personalityLink}>Take Test</Link>
                </button>
            </div>
        </div>
    );
}

export default NoPersonalityResult;
