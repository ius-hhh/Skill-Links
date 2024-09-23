import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active,setActive]= useState(false)
    const [open,setOpen]= useState(false)

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
                {!currentUser&&<span>Sign In</span>}
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser&&<button>Join</button>}
                {currentUser&& <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908" alt="" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                        {currentUser?.isSeller && (
                                <>
                                    <span>Services</span>
                                    <span>Add new Service</span>
                                </>
                            )
                        }
                        <span>Orders</span>
                        <span>Messages</span>
                        <span>Logout</span>
                    </div>}
                </div>} 
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