import React from 'react'
import './footer.css';
import logo from '../../media/images/logo-no-background.png'
import { Button, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const FooterSection = () => {
    return (
        <div className='footerContainer'>
            <div className='footerFirstColumn'>
                <img src={logo} alt='' width={'40%'}/>
                <div className='footerInformation'>
                    Our flight school was founded by pilots who grew up with dreams of flying. Since 1999, thousands of professional pilots from over 75 countries have graduated from our flight training courses.
                </div>
                <div className='footerInformation' style={{letterSpacing:'-0.01em'}}>
                    © 2023 Fly About Aviation. All Rights Reserved.
                </div>
            </div>
            <div className='footerSecondColumn'>
                <div className='footerSubHeading'>
                    SUBSCRIBE & STAY UPDATED
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'20px'}}>
                    <TextField placeholder='Email' 
                    sx={{
                        background:'rgb(50,70,70)',
                        width:'calc(100% - 150px)',
                        "& input": {
                            color: 'white',
                        }
                    }}/>
                    <Button sx={{width:'120px',borderRadius:'0px'}} variant='contained'>Subscribe</Button>
                </div>
                <div className='footerSubHeading' style={{marginTop:'40px'}}>
                    PHONE AND ADDRESS
                </div>
                <div className='footerLocation'>
                    <LocationOnIcon sx={{color:'rgb(255, 213, 0)'}}/>
                    <label style={{marginLeft:'10px'}}>Damyns Hall Aerodrome - Essex</label>
                </div>
                <div className='footerLocation'>
                    <LocalPhoneIcon sx={{color:'rgb(255, 213, 0)'}}/>
                    <label style={{marginLeft:'10px'}}>07540 899 690</label>
                </div>
            </div>
        </div>
    )
}

export default FooterSection