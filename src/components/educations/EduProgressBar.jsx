
function EduProgressBar({category, percent}) {
  return (
    <div className="m-1 grow">
        <p className="text-b-sm text-g-black-1">{category}</p>
        <div className="w-[100%] h-[12px] bg-g-gray-3 rounded-lg my-1">
            <div className="h-[100%] bg-p-blue-2 rounded-lg" style={{width: `${percent}%`}}>
            </div>
        </div>
        <p className="text-b-xs text-end text-g-gray-1">{percent}% Completed</p>
    </div>
  )
}

export default EduProgressBar