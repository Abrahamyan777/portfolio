import { NavLink } from 'react-router-dom';
import './modal.scss'
import { FiX } from "react-icons/fi";
import MenuList from '../listMenu/listMenu';
import { useTranslation } from 'react-i18next';


const Modal = (props) => {
    const { t } = useTranslation();

    const list1 = [t("MenuList.Home"), t("MenuList.About"), t("MenuList.Experience"), t("MenuList.Portfolio"), t("MenuList.Contact Us"),];

    const hendleClick1 = (index, el) => {
       
        if(el === 'Home'){
            props.homeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }else if(el === 'About'){
            props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'Experience'){
            props.experienseRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'Contact Us'){
            props.contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'Portfolio'){
            props.portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        else if(el === 'News'){
            props.newsRef.current?.scrollIntoView({ behavior: 'smooth'});
        }
    }


    return (
        <aside className='modalWrapper' onClick={() => props.setOpen(!props.open)}>
            <nav className='menu' onClick={(e) => e.stopPropagation()}>
                <div className='menuTitleDiv'>
                    <h4 className='menuTitle'>{t("MenuList.Menu")}</h4>
                    <button className='closeIcon' onClick={() => props.setOpen(!props.open)}><FiX /></button>
                </div>
                <div className='menuBody'>
                    <ul >
                        {
                            list1.map((el, index) => (
                                <li key={index}>
                                    <NavLink
                                     onClick={() => {
                                        props.setOpen(!props.open)
                                        hendleClick1(index, el)
                                    }}
                                    // to={ `portfolio/` + el.toLowerCase()} 
                                    // className={({isActive}) => isActive ? "active-link" : ""}
                                    >{el}</NavLink>
                                </li>
                            ))
                        }
                        {/* <MenuList list={list1} open={props.open} setOpen={props.setOpen} /> */}
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Modal;