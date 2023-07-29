import { NavLink } from "react-router-dom";
import './listMenu.scss'


const MenuList = (props) => {

    const list = ['Home', 'About', 'Experience', 'Portfolio','News', 'Contact Us'];

    const hendleClick = () => {
        if (props.open && props.setOpen) {
            props.setOpen(!props.open)
        }
    }

    return (
        list.map((el, index) => (
            <li key={index}>
                <NavLink
                    to={ `portfolio/` + el.toLowerCase()}
                    onClick={() => hendleClick()}
                    className={({isActive}) => isActive ? "active-link" : ""}
                >{el}</NavLink>
            </li>
        ))
    )
}


export default MenuList;