import { NavLink } from 'react-router-dom';
import  './modal.scss'
import { FiX } from "react-icons/fi";
import MenuList from '../listMenu/listMenu';


const Modal = (props) => {
    const list1 = ['Home', 'About', 'Experience', 'Portfolio','News', 'Contact Us'];
 
    return (
        <aside className='modalWrapper' onClick={() => props.setOpen(!props.open)}>
            <nav className='menu' onClick={(e) => e.stopPropagation()}>
                <div className='menuTitleDiv'>
                    <h4 className='menuTitle'>Menu</h4>
                    <button className='closeIcon' onClick={() => props.setOpen(!props.open)}><FiX /></button>
                </div>
                <div className='menuBody'>
                    <ul >
                        <MenuList list={list1}  open={props.open} setOpen={props.setOpen}/>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Modal;