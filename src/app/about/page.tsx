import Link from "next/link"

const About = () => {
  return (
    <div className="mn">
      <h1 className="mn-head">About</h1>
      <p className="py-6 w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias esse et ullam, amet ad eligendi iusto explicabo id corporis hic in tempore dolorem, deleniti enim harum obcaecati ipsa blanditiis? Laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, consequuntur fugiat veniam provident sapiente, id est earum maiores quidem atque velit eum vitae exercitationem odit ipsam cupiditate aliquam laboriosam facilis!</p>
      <Link href='/'>
      <button className="primary-btn">Go back</button>
      </Link>
    </div>
  )
}

export default About