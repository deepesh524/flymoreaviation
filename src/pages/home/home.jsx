import React from 'react'
import './home.css';

const HomePage = () => {
    return (
        <div className='homeContainer'>
            <div className='homeHeadingContainer'>
                <div style={{fontSize:'78px',color:'white',fontFamily:'Anton'}}>Fly About Aviation</div>
                <div style={{fontSize:'34px',color:'white',fontWeight:'500',fontFamily:'Sans',marginTop:'1vh'}}>Come Join Us We Fly Everywhere</div>
                <div style={{fontSize:'20px',color:'rgb(210,210,210)',fontWeight:'500',marginTop:'1vh'}}>
                    Elevate yourself with our aviation academy.
                    <br/>
                    UK & Eire Distributor for Pipistrel Aircraft
                </div>
            </div>
           
        </div>
    )
}

export default HomePage