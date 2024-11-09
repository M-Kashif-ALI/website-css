import Image from 'next/image'
import moon from '../../../public/moon-surface-hd.png'


const Hero = () => {
  return (
    <div className="hero-main">
      <div className="main">
        <div className="content-box md:pl-20">
          <div className="space-y-4 md:pr-36 content">
            <h1 className="text-5xl font-bold uppercase">Orbit The Earth</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni molestias eius deserunt odit, earum aspernatur officiis perspiciatis harum veniam dolores illo unde aliquam qui quidem hic? Voluptatibus sint odio reiciendis molestias enim dolores, earum quaerat quas facere quos pariatur dolorem quam, nesciunt perferendis voluptate, magnam atque ad.</p>
            <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">Learn More</button>
          </div>
          <div></div>
        </div>
      </div>
      <Image src={moon} alt='' height={300} width={300} className='moon-img' />

      <div className='shade'>

      </div>
    </div>
  )
}

export default Hero