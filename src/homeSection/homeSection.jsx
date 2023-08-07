import './homeSection.scss';
import img from './../images/my-img.jpg'
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import Container from '../components/container/container';

const HomeSection = (props) => {



    return (
        <div className="homeSection home-ms" ref={props.homeRef}>
            <Container>
                <div className='homeSectionInner'>
                    <div className='info-section'>
                        <div className='info-left'>
                            <div className='portfolio-img'>
                                <div className='img-inner'>
                                    <img src={img} alt='portfolio-img' className='portfolio-img' />
                                </div>
                            </div>
                        </div>
                        <div className='info-right'>
                            <div className='text-info'>
                                <h1 className='mySelf'>
                                    I'm  <span>
                                        Grigor
                                    </span>
                                </h1>
                                <h2>
                                    <span>-</span> I'm a Web Developer
                                </h2>
                                <p>
                                    The goal isn't to build a website. The goal is to build
                                    business. With Creative, flexible and affordable website design
                                    and development.
                                </p>
                                <div className='tooBtn'>
                                    <NavLink className='ms-btn'>Download CV</NavLink>
                                    <NavLink >More Info</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mouse-bottom'>
                        <div className='mouse-inner'></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSection;