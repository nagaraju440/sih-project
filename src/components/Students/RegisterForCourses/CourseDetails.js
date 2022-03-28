import React from 'react'
import '../RegisterForCourses/CourseDetails.css'
export default function CourseDetails() {
  return (
    <div className='containermain'>
        <div className="Courses_card">
         <div>
             <div className="course-heading">Course Details</div>
         </div>
         <div className="course-titlepart">
             <div className="title">Course-Title:<span className="title-answer">Python programming</span></div>
         </div>
         <div className="course-mentorpart">
             <div className="mentorname">Mentor Name:<span className="mentor-answer">Nagaraju</span></div>
         </div>
         <div className="course-datepart">
             <div className="date">Starting Date:<span className="date-answer">12-jan</span></div>
         </div>
         <div className="course-syllabuspart"><div clssName="syllabus">
             Schedule and Syllabus</div>
         </div>
         <div>5</div>
        </div>
    </div>
  )
}
