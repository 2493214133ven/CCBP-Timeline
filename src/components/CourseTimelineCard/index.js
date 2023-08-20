import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {CourseDetails} = props
  const {description, duration, courseTitle, tagsList} = CourseDetails

  return (
    <div className="course-card-container">
      <div className="course-title-react-icon-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="react-icon-duration-card">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list-container">
        {tagsList.map(eachTag => (
          <li className="tag-name" key={eachTag.id}>
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
