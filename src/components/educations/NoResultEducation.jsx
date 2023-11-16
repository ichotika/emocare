import EduProgressBar from "./EduProgressBar"

function NoResultEducation({categoryTitle}) {
  return (
    <>
        <EduProgressBar category={categoryTitle} percent={0} />
    </>
  )
}

export default NoResultEducation