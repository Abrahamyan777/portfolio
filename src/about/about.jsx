import './about.scss'


const About = () => {
    return (
        <div className="aboutConteiner">
            <div className='aboutInner'>
                <h1 className='aboutMe'>About
                    <span> Me</span>
                </h1>
                <div className='aboutInfo'>
                    <div className='aboutLeft'>
                        <div className='info'>
                            <div className='activity'>
                                <h2>About myself</h2>
                                <p>
                                    I’m a purposeful and hard-working person who is ready for new
                                    challenges. Programming is my second profession. I believe that
                                    collaboration in a team and hard work can help to achieve success.
                                    Eager to obtain a challenging position at a company that will
                                    expand my learning and grow up my skills.
                                </p>
                            </div>

                            <div className='contact'>
                                <ul>
                                    <li>
                                        <span className='title'>
                                            Full Name
                                            <b>:</b>
                                        </span>
                                        <span className='titleInfo'>Grigor Abrahamyan</span>

                                    </li>
                                    <li>
                                        <span className='title'>
                                            Age
                                            <b>:</b>
                                        </span>
                                        <span>27 Years</span>
                                    </li>
                                    <li>
                                        <span className='title'>
                                            Phone No
                                            <b>:</b>
                                        </span>
                                        <span>+374 93 33 43 95</span>
                                    </li>
                                    <li>
                                        <span className='title'>
                                            Email
                                            <b>:</b>
                                        </span>
                                        <span>abrahamyan051996@gmail.com</span>
                                    </li>
                                    <li>
                                        <span className='title'>
                                            Address
                                            <b>:</b>
                                        </span>
                                        <span>Ararat Armenia</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='aboutRight'>
                        <ul>
                            <li>
                                <div className='skills'>
                                    <h3>JAVASCRIPT</h3>
                                    <span>65%</span>
                                </div>
                                <div className='progress-bar'>
                                    <span className='javascript'></span>
                                </div>
                            </li>
                            <li>
                                <div className='skills'>
                                    <h3>HTML</h3>
                                    <span>80%</span>
                                </div>
                                <div className='progress-bar'>
                                    <span className='html'></span>
                                </div>
                            </li>
                            <li>
                                <div className='skills'>
                                    <h3>CSS  / SCSS</h3>
                                    <span >70%</span>
                                </div>
                                <div className='progress-bar'>
                                    <span className='css'></span>
                                </div>
                            </li>
                            <li>
                                <div className='skills'>
                                    <h3>React</h3>
                                    <span>55%</span>
                                </div>
                                <div className='progress-bar'>
                                    <span className='react'></span>
                                </div>
                            </li>
                            <li>
                                <div className='skills'>
                                    <h3>Redux</h3>
                                    <span>50%</span>
                                </div>
                                <div className='progress-bar'>
                                    <span className='redux'></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;