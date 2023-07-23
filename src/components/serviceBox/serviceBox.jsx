import { BiCodeAlt } from 'react-icons/bi';
import './serviceBox.scss';
import { AiOutlineAim, AiOutlineAntDesign, AiOutlineDesktop } from "react-icons/ai";


const ServiceBox = () => {
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
        serviceList.map(({logo, title, text}) => (
            <div className="serviceBox">
                <div className='logo'>
                    {logo}
                </div>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        ))
    )
}

export default ServiceBox;