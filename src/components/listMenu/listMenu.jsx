import { NavLink } from "react-router-dom";
import './listMenu.scss'
import { useTranslation } from "react-i18next";


const MenuList = (props) => {
    const { t } = useTranslation();

    const list = [t("MenuList.Home"), t("MenuList.About"), t("MenuList.Experience"), t("MenuList.Portfolio"), t("MenuList.Contact Us"),];

    const hendleClick = (index, el) => {
       
        if(el === 'Home'){
            props.homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if(el === 'About' ){
            props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if(el === 'Experience' ){
            props.experienseRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if(el === 'Contact Us'){
            props.contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if(el === 'Portfolio' ){
            props.portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        list.map((el, index) => (
            <li key={index}>
                <NavLink
                    // to={ `portfolio/` + el.toLowerCase()} 
                    onClick={() => hendleClick(index, el)}
                    // className={({isActive}) => isActive ? "active-link" : ""}
                >{el}</NavLink>
            </li>
        ))
    )
}


export default MenuList;