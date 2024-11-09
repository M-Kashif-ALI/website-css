import Link from 'next/link'
import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaLocationDot, FaMessage, FaPhone } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
      <section className='sec'>
        <div className='col-container'>
          {/* 1st col */}
          <div className='first-col'>
            <h3 className='heading'>Be ready to grow</h3>
            <p>Get Exclusive <span className='font-bold'>Update</span> straight to your inbox</p>
            <br />
            <div className='footer-form'>
              <input type="text" className='inp-field' placeholder='Enter email'/>
              <button className='primary-btn'>OK</button>
            </div>
          </div>

          {/* 2nd col */}

          <div className='sec-col'>
            <div>
              <div className='py-8 px-4'>
                <h3 className='footer-h'>Quick Links</h3>
                <ul className='ul'>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>

                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className='py-8 px-4'>
                <h3 className='footer-h'>Quick Links</h3>
                <ul className='ul'>
                  <li>
                    <Link href="/">Home</Link>
                  </li>

                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>

                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='contact'>
              <div className='py-8 px-4'>
                <h3 className='footer-h'>Conatct us</h3>
              </div>
              <div className='space-y-3'>
                <div className='footer-div'>
                  <FaLocationDot/>
                  <p>Karachi, Pakistan</p>
                </div>

                <div className='footer-div mt-3'>
                  <FaMessage/>
                  <p>mparvezalam1978@gmail.com</p>
                </div>

                <div className='footer-div mt-3'>
                  <FaPhone/>
                  <p>+92 324-8184287</p>
                </div>
              </div>
            </div>

          </div>
            </div>

          {/* Bottom section */}

          <div className='bottom'>
            <div className='div-cont'>     
            <span className='spn'>
              copyright &copy; 2024 by TCJ
            </span>
            <div className='flex justify-center items-center gap-4 pb-4 lnk'>
              <Link href='/login'>
              <FaLinkedin className='text-4xl'/>
              </Link>

              <Link href='/login'>
              <FaGithub className='text-4xl'/>
              </Link>

              <Link href='/login'>
              <FaFacebook className='text-4xl'/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer