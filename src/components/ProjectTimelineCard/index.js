// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    description,
    duration,
    projectTitle,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img className="image-url" src={imageUrl} alt="project" />
      <div className="project-title--react-icon-duration-card">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="react-icon-duration-card">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="visit" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
