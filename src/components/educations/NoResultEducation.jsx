import DoughnutChart from "../employees/DoughnutChart"

function NoResultEducation({categoryTitle}) {
  return (
    <div>
        <DoughnutChart healthPercent={0} categoryTitle={categoryTitle} />
    </div>
  )
}

export default NoResultEducation