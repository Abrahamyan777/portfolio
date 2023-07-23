import { NavLink } from "react-router-dom";
import './listMenu.scss'


const MenuList = (props) => {
    const hendleClick = () => {
        if (props.open && props.setOpen) {
            props.setOpen(!props.open)
        }
    }

    return (
        props.list.map((el, index) => (
            <li key={index}>
                <NavLink
                    to={el.toLowerCase()} onClick={() => hendleClick()}
                    className={({isActive}) => isActive ? "active-link" : ""}
                >{el}</NavLink>
            </li>
        ))
    )
}


export default MenuList;