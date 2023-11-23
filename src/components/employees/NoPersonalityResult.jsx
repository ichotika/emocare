import Link from "next/link";

function NoPersonalityResult({ personalityLink }) {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-white p-4 h-[100%]">
            <h1 className="font-bold text-b-lg">Your Personality Type</h1>
            <div className="flex flex-col justify-evenly h-[100%] gap-2 p-2 text-center font-bold">
                <p className="text-g-gray-1 text-b-lg">
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
