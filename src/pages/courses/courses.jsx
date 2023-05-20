import React from 'react';
import './courses.css';
import pplCourse from '../../media/images/pplcourse.webp';
import npplCourse from '../../media/images/npplcourse.webp';
import electricflightCourse from '../../media/images/electricflightcourse.webp';
import AvTimerIcon from '@mui/icons-material/AvTimer';
const OurCoursesPage = () => {
    var timerIconStyle = {
        fontSize:'20px',
        color:'rgb(30,50,50)',
        marginRight:'5px'
    }
    return (
        <div className='coursesContainer'>
            <div className='coursesContainerHeading'>
                <div style={{width:'5vw',marginTop:'25px',marginRight:'30px',borderTop:'1px solid white'}}/>
                Our Courses
                <div style={{width:'5vw',marginTop:'25px',marginLeft:'30px',borderTop:'1px solid white'}}/>
            </div>
            <div className='courseItemWrapper'>
                <div className='courseItem'>
                    <div className='courseItemImage' style={{backgroundImage:`url(${pplCourse})`}}>
                    </div>
                    <div className='courseSubHeading'>UK CAA Syllabus</div>
                    <div className='courseHeading'>PPL Course</div>
                    <div className='courseDetails'>
                        <AvTimerIcon sx={timerIconStyle}/>
                        45 Hours minimum
                    </div>
                </div>
                <div className='courseItem'>
                    <div className='courseItemImage' style={{backgroundImage:`url(${npplCourse})`}}>
                    </div>
                    <div className='courseSubHeading'>BMAA Syllabus</div>
                    <div className='courseHeading'>NPPL Course</div>
                    <div className='courseDetails'>
                        <AvTimerIcon sx={timerIconStyle}/>
                        25 Hours minimum
                    </div>
                </div>
                <div className='courseItem'>
                    <div className='courseItemImage' style={{backgroundImage:`url(${electricflightCourse})`}}>
                    </div>
                    <div className='courseSubHeading'>Differences Training</div>
                    <div className='courseHeading'>Electric Flight</div>
                    <div className='courseDetails'>
                        <AvTimerIcon sx={timerIconStyle}/>
                        7 sorties minimum
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCoursesPage