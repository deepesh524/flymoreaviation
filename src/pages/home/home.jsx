import React from 'react'
import homepageImg from '../../media/images/homepage.jpeg';

const HomePage = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',height:'100vh',width:'100vw',backgroundSize:'cover',marginTop:'-80px',backgroundPosition:'center',transition:'all 0.5s ease-in-out',backgroundImage:`url(${homepageImg})`}}>
            <div style={{position:'absolute',zIndex:'1'}}>
                <div style={{marginLeft:'3vw',marginTop:'45vh'}}>
                    <div style={{fontSize:'78px',color:'white',fontFamily:'Anton'}}>Fly About Aviation</div>
                    <div style={{fontSize:'34px',color:'white',fontWeight:'500',fontFamily:'Sans',marginTop:'1vh'}}>Come Join Us We Fly Everywhere</div>
                    <div style={{fontSize:'20px',color:'rgb(210,210,210)',fontWeight:'500',marginTop:'1vh'}}>
                        Elevate yourself with our aviation academy.
                        <br/>
                        UK & Eire Distributor for Pipistrel Aircraft
                        

                    </div>
                </div>
                <div>
                    Pl
                </div>
            </div>
            {/* <img src={homepageImg} alt='' width={'100%'} height={'100%'} style={{transform:'scale(1.25)',filter:'brightness(50%)'}}/> */}
        </div>
    )
}

export default HomePage