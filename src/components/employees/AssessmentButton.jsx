import Link from "next/link";

export default function AssessmentButton({ link, btnDisabled }) {
    return (
        <>
            <button
                className="-mt-16 rounded-lg bg-p-blue-1 p-2 font-medium text-white hover:bg-p-blue-2 disabled:bg-p-blue-5 disabled:text-p-blue-1"
                disabled={btnDisabled}
            >
                {btnDisabled ? (
                    <p>Take Assessment</p>
                ) : (
                    <Link href={link} disabled={btnDisabled}>
                        Take Assessment
                    </Link>
                )}
            </button>
        </>
    );
}
