import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [active,setActive]= useState(false)
    const [open,setOpen]= useState(false)

    const {pathname}=useLocation()

    const navigate = useNavigate();
    const isActive=()=>{
        window.scrollY>0 ? setActive(true) : setActive(false)
    }
    useEffect(() =>{
        window.addEventListener("scroll",isActive);
        return()=>{
            window.removeEventListener("scroll",isActive)
        }
    },[]);

    const currentUser =JSON.parse(localStorage.getItem("currentUser"))

    const handleLogout = async ()=>{
        try {
            const res = await newRequest.post("auth/logout");
            localStorage.removeItem("currentUser");
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className={active || pathname !== "/" ?"navbar active":"navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
                <span className='text'>Skill Links</span>
                </Link>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser&&<span>Sign In</span>}
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser&&<button>Join</button>}
                {currentUser&& <div className="user" onClick={()=>setOpen(!open)}>
                    <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                    <span>{currentUser?.username}</span>
                    {open && <div className="options">
                        {currentUser?.isSeller && (
                                <>
                                    <Link to='/myservices' className='link'>Services</Link>
                                    <Link to='/add' className='link'>Add new Service</Link>
                                </>
                            )
                        }
                        <Link className='link' to='/orders'>Orders</Link>
                        <Link className='link' to='/messages'>Messages</Link>
                        <Link className='link' onClick={handleLogout}>Logout</Link>
                    </div>}
                </div>} 
            </div>
            
        </div>
            {(active || pathname !== "/") && (<>
            <hr />
            <div className="menu">
                <Link className='link' to='/'>
                    Video & Photography
                </Link>
                <Link className='link' to='/'>
                    Music & Audio
                </Link>
                <Link className='link' to='/'>
                    Programming & Tech
                </Link>
                <Link className='link' to='/'>
                    Business
                </Link>
                <Link className='link' to='/'>
                    Lifestyle
                </Link>
                <Link className='link' to='/'>
                    Digital Marketing
                </Link>
            </div>
            </>
            )}
    </div>
  )
}

export default Navbar