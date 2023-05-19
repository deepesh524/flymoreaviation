import React, { useEffect, useState } from 'react';
import './navbar.css';
import navbarLogo from '../../media/images/logo-no-background.png'
import Hamburger from 'hamburger-react'

const NavbarComponent = () => {
    const [hamburgerOpened, setHamburgerOpened] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll',e=>{
            if(window.scrollY>30){
                    document.getElementById('navbarContainer').className = 'navbarContainer navbarContainerOpened'
            }
            else{
                document.getElementById('navbarContainer').className = hamburgerOpened ? 'navbarContainer navbarContainerOpened' : 'navbarContainer'
            }
        })
        
        return () => {
            document.removeEventListener('scroll',e=>{
                if(window.scrollY>30){
                    document.getElementById('navbarContainer').className = 'navbarContainer navbarContainerOpened'
                }
                else{
                    document.getElementById('navbarContainer').className = hamburgerOpened ? 'navbarContainer navbarContainerOpened' : 'navbarContainer'
                }
            })
        }
    }, [hamburgerOpened])
    
    return (
        <div id='navbarContainer' className={hamburgerOpened ? 'navbarContainer navbarContainerOpened' : 'navbarContainer'}>
            <img className='navbarLogo' src={navbarLogo} alt=''/>
            <div className='navHolder'>
                <div className='navItem'>Home</div>
                <div className='navItem'>About Us</div>
                <div className='navItem'>Courses</div>
                <div>
                    <Hamburger toggled={hamburgerOpened} toggle={setHamburgerOpened} size={22}/>
                </div>
                <div id='navbarMenuContainer' className={hamburgerOpened ? 'navItemsMenuContainer navItemsMenuContainerOpened' : 'navItemsMenuContainer'}>
                    <div className='navMenuItem'>Home</div>
                    <div className='navMenuItem'>About Us</div>
                    <div className='navMenuItem'>Courses</div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent