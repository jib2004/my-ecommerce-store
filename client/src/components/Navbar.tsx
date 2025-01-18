import React from 'react'
import logo from '../assets/img/a_design_text_logo_for_jibstores_black-removebg-preview.png' 
import { Link } from 'react-router'
import Cart from '../components/Cart'
import AccountMenu from './Avatar'
import NotSignedIn from './NotSignedIn'

const Navbar = () => {
  return (
    <nav className=' border  flex items-center justify-between w-screen'>
        <figure className=''>
           <Link to={"/"}><img src={logo} alt="The loge of jibsstores" className='size-[80px] ' /></Link>  
        </figure>

        <div></div>

        <div className='flex items-center gap-3 pr-6'>
           {false ? <AccountMenu /> : <NotSignedIn/>}
            <Cart />
        </div>

    </nav>
  )
}

export default Navbar