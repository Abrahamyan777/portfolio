import { useInView } from 'react-intersection-observer';
import Container from '../components/container/container';
import ListTitle from '../components/listContact/listContact';
import ListSkills from '../components/listSkills/listSkills';
import './about.scss'
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';


const About = (props) => {

    const { ref: myRocet, inView: ElIsVisible } = useInView({ threshold: 0.5 })
    const myRef = useRef()

    useEffect(() => {
        if (ElIsVisible) {
            myRef.current.classList.add("animation")
        }
    }, [ElIsVisible])
    
    const {t} = useTranslation()


    return (
        <div className="aboutConteiner" ref={props.aboutRef}>
            <Container>
                <div className='aboutInner'>
                    <h1 className='aboutMe'>{t("about.About")} <span> {t("about.Me")}</span> </h1>
                    <div className='aboutInfo'>
                        <div className='aboutLeft'>
                            <div className='info'>
                                <div className='activity'>
                                    <h2>{t("about.About myself")}</h2>
                                    <p>
                                    {t("about.text1")}
                                    </p>
                                </div>

                                <div className='contact'>
                                    <ul>
                                        <ListTitle />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='aboutRight' ref={myRocet}>
                            <ul ref={myRef} className='ulRight ' >
                                <ListSkills />
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About;