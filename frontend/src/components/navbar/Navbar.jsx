import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active,setActive]= useState(false)

    const isActive=()=>{
        window.scrollY>0 ? setActive(true) : setActive(false)
    }
    useEffect(() =>{
        // window.addEventListener("scroll",isActive);
        return()=>{
            window.removeEventListener("scroll",isActive)
        }
    },[]);

    const currentUser ={
        id:1,
        username:"John Doe",
        isSeller:true
    }

  return (
    <div className={active?"navbar active":"navbar"}>
        <div className="container">
            <div className="logo">
                {/* <Link to="/"> */}
                <span className='text'>Skill</span>
                <span className='hypen'>-</span>
                <span className='text'>Links</span>
                {/* </Link> */}
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                <span>Become a Seller</span>
                <button>Join</button>
            </div>
            
        </div>
            {active && (<>
            <hr />
            <div className="menu">
                <span>Test1</span>
                <span>Test2</span>
                <span>Test3</span>
                <span>Test4</span>
            </div>
            </>
            )}
    </div>
  )
}

export default Navbar