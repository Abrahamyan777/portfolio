import './service.scss'
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineAim, AiOutlineAntDesign, AiOutlineDesktop } from "react-icons/ai";


const Service = () => {

    const serviceList = [
        {
            logo: <AiOutlineAntDesign />,
            title: "Graphics Design",
            text: "Develop the Visual Identity of Your Business"
        },
        {
            logo: <AiOutlineDesktop />,
            title: "Web Design",
            text: "Connect With Your Users, Not Just Your Business."
        },
        {
            logo: <BiCodeAlt />,
            title: "Development",
            text: "We Develop the Visual Identity of Your Business."
        },
        {
            logo: <AiOutlineAim />,
            title: "Seo Friendly",
            text: "Taking your site at the top of Google's ranking."
        }
    ]

    return (
        <div className="serviceContainer">
            {
                serviceList.map(({ logo, title, text }, index) => (
                    <div className="serviceBox" key={index}>
                        <div className='logo'>
                            {logo}
                        </div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Service;