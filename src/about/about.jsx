import ListTitle from '../components/listContact/listContact';
import ListSkills from '../components/listSkills/listSkills';
import './about.scss'


const About = (props) => {


    return (
        <div className="aboutConteiner" ref={props.aboutRef}>
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
                                    <ListTitle />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='aboutRight'>
                        <ul>
                            <ListSkills />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;