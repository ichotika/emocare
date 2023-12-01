import Link from "next/link";

export default function AssessmentButton({ link, btnDisabled }) {
    return (
        <>
            <button
                className="-mt-18 w-[206px] rounded-lg bg-p-blue-1 p-2 font-medium text-white hover:bg-p-blue-2 disabled:bg-p-blue-5 disabled:text-p-blue-1 h-[44px]"
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
