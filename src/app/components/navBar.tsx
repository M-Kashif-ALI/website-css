"use client"

import Image from "next/image"
import Logo from '../../../public/logo (1).png'
import Link from "next/link"
import { useState } from "react"
import { FaBars, FaX } from "react-icons/fa6"

const NavBar = () => {

  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick)
  }


  return (
    <div className="navbar">
      <div>
        <div className="container">
          <div className="image-container">
            <Image src={Logo} alt="logo" height={50} width={50} />
            <span>TCJ-SPACE</span>
          </div>
          <div className="text-white">
            <ul className="list">
              <Link href='/'><li>Home</li></Link>
              <Link href='/tech'><li>Technology</li></Link>
              <Link href='/galaxy'><li>Galaxy</li></Link>
              <Link href='/satelite'><li>Satelite</li></Link>
              <Link href='/about'><li>About</li></Link>
            </ul>
          </div>

          <div>
            <Link href='/login'> <button className="login-button">Login</button> </Link>
          </div>



          <div className="hide">
            <div className="toggle" onClick={toggleNavBar}>

              {isClick ? (
               <FaX />
              ) : <FaBars />

              }

              {isClick && (
                <div className="hide">
                  <div className="hidelist">
                    <ul>
                      <Link href='/'><li>Home</li></Link>
                      <Link href='/tech'><li>Technology</li></Link>
                      <Link href='/galaxy'><li>Galaxy</li></Link>
                      <Link href='/satelite'><li>Satelite</li></Link>
                      <Link href='/about'><li>About</li></Link>
                      <Link href='/login'><li>Login</li></Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar