import Link from "next/link";

function NoPersonalityResult({ personalityLink }) {
    return (
        <div className="flex h-[100%] flex-col gap-4 rounded-lg bg-white p-4">
            <h1 className="text-b-lg font-bold">Your Personality Type</h1>
            <div className="flex h-[100%] flex-col justify-evenly gap-2 p-2 text-center font-bold">
                <p className="text-b-lg text-g-gray-1">
                    You have not taken personality test yet.
                </p>
                <button className="rounded-lg bg-p-blue-1 p-2 text-b-lg font-medium text-white hover:bg-p-blue-2">
                    <Link href={personalityLink}>Take Test</Link>
                </button>
            </div>
        </div>
    );
}

export default NoPersonalityResult;
