// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderComponent = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard key={eachItem.id} CourseDetails={eachItem} />
    }
    return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="timeline-journey-app-container">
        <h1 className="ccbp-4">
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>
        <Chrono
          theme={{
            primary: 'blue',
            secondary: 'green',
            cardBgColor: '#ffffff',
            titleColor: '#000',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => this.renderComponent(eachItem))}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
