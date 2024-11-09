import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace } from "react-icons/fa6";
import { FaSpaceAwesome } from "react-icons/fa6";
import waves from '../../../public/wave Gif.gif'


const Services = () => {

  const serviceData = [
    {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "700",
  },
  ]

  return (
    <div className="service-main">
    <div className="container">
      <div className="service-cont">
        <div className="service-content">
        {serviceData.map((data) => (
              <div key={data.title} className="card">
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
        </div>
        <Image src={waves} alt="" height={100} width={100} className="service-img"/>
      </div>
    </div>
    </div>
  )
}

export default Services