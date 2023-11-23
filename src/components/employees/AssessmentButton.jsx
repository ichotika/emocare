import Link from "next/link"

export default function AssessmentButton({link, btnDisabled}) {
  return (
    <>  
        <button className="rounded-lg bg-p-blue-1 p-2 text-white font-medium hover:bg-p-blue-2 disabled:bg-p-blue-5 disabled:text-p-blue-1" disabled={btnDisabled}>
            {btnDisabled ? <p>Take Assessment</p> :<Link href={link} disabled={btnDisabled}>Take Assessment</Link>}
        </button>
    </>
  )
}
