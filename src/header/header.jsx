import './header.scss'
import logo from './../images/instart.webp'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import Modal from '../components/modal/modal';
import MenuList from '../components/listMenu/listMenu';
import Container from '../components/container/container';

import '../i18n'
import { useTranslation } from 'react-i18next';



const Header = (props) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [open, setOpen] = useState(false)

    const [fix, setFix] = useState(false);

    function fixed() {
        if (window.scrollY > 150) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }

    window.addEventListener('scroll', fixed);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);
    const { t, i18n } = useTranslation();

    const handleChange = (e) => {
        console.log(e.target.value);
         let le = e.target.value
        i18n.changeLanguage(le)
    };

    return (
        <header className={fix ? "header-wrapper-fix header-wrapper" : ' header-wrapper'} >
            <Container>

                <div className="header-inner">

                    <div className='maser-logo'>
                        <NavLink to='/'>
                            <h2 className='crative' data-text="GA_Web_Dev">GA_Web_Dev</h2>
                        </NavLink>
                    </div>
                    {(screenWidth > 992) ? (
                        <nav className='menu-list'>
                            <ul>
                                <MenuList
                                    homeRef={props.homeRef}
                                    aboutRef={props.aboutRef}
                                    experienseRef={props.experienseRef}
                                    contactRef={props.contactRef}
                                    portfolioRef={props.portfolioRef}
                                    newsRef={props.newsRef}
                                />
                            </ul>
                        </nav>
                    )
                        :
                        <div className='iconDiv'>
                            <button className='iconBtn' onClick={() => setOpen(!open)}>
                                <BiMenu className='icon-menu' />
                            </button>
                        </div>
                    }
                    {
                        open && <Modal
                            homeRef={props.homeRef}
                            aboutRef={props.aboutRef}
                            experienseRef={props.experienseRef}
                            contactRef={props.contactRef}
                            portfolioRef={props.portfolioRef}
                            newsRef={props.newsRef}
                            open={open}
                            setOpen={setOpen} />
                    }
                    <div className='languges'>
                        <select onChange={handleChange}>
                            <option value="EN">En</option>
                            <option value="RU">Ru</option>
                            <option value="AM">Am</option>
                        </select>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;
