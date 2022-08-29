import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import './Experience.css'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
	<Timeline>
		{experiences.map((experience) => (
		<TimelineItem>
          <TimelineOppositeContent>
           <span className="exp__list-company">{experience.company}</span>
		   {!experiences.current ? <span className="exp__list-current-company">{experience.current}</span> : ''}
          </TimelineOppositeContent>
          <TimelineSeparator>
			<TimelineDot>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
			<span className="exp__list-title">{experience.title}</span>
			<br />
			<span className="exp__list-length">{experience.length}</span>
			</TimelineContent>
        </TimelineItem>
		))}
    </Timeline>
    </section>
  )
}

export default Experience
