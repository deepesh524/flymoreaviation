import React from 'react';
import './about.css';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
const AboutSection = () => {

    var aboutSectionIcon = {
        fontSize:'62px',
        height:'120px'
    }
    return (
        <div className='aboutSectionContainer'>
            <div className='aboutSectionItem'>
                <AirlineSeatReclineExtraIcon sx={aboutSectionIcon}/>
                <div className='aboutSectionHeading'>
                    Best Instructors
                </div>
                <div className='aboutSectionText'>
                    Our flight instructors are carefully selected and adhere to the highest standards of the industry.
                </div>
            </div>
            <div className='aboutSectionItem'>
                <LocationOnIcon sx={aboutSectionIcon}/>
                <div className='aboutSectionHeading'>
                    Exciting Locations
                </div>
                <div className='aboutSectionText'>
                    We're conveniently located at LA International Airport, providing students with the best experience.
                </div>
            </div>
            <div className='aboutSectionItem'>
                <ConnectingAirportsIcon sx={aboutSectionIcon}/>
                <div className='aboutSectionHeading'>
                    Modern Airplanes
                </div>
                <div className='aboutSectionText'>
                    Our flight school has the best and the most diverse fleet of helicopters in California as well as simulators.
                </div>
            </div>
        </div>
    )
}

export default AboutSection