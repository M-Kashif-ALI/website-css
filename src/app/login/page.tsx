import Link from 'next/link'


const Login = () => {
  const bgVideo = "/video/earth-bg.mp4"
  return (
    <div className='overflow-hidden'>
      <div>
        <video src={bgVideo} autoPlay muted loop className="vid" />
      </div >
      <div className='login-content'>
        <h1 className='login-h1'>Login</h1>

        <div>
          <div className='name-inp'>
            <label htmlFor="name" className='label'>Username:</label>
            <input type="text" placeholder='Enter your username' name='name' className='login-input' />
          </div>

          <div className='secinp'>
            <label htmlFor="name" className='label'>Email:</label>
            <input type="email" placeholder='Enter your email' name='name' className='login-input' />
          </div>

          <div className='secinp gap-1'>
            <label htmlFor="name" className='label'>Password:</label>
            <input type="password" placeholder='Enter your password' name='name' className='login-input' />
          </div>

          <div className="radio-cont">
            <div className='cont-radio'>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="male" id="male" />
            </div>

            <div className='cont-radio'>
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" value="female" id="female" />
            </div>

          </div>
        </div>

        <Link href='/'>
        <button className='login-btnn'>Login</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Login