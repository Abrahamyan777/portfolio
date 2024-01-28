import { useInView } from 'react-intersection-observer';
import Container from '../components/container/container';
import './project.scss'
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';


const Project = () => {

    const {t} = useTranslation()

    const {ref: myRocket1, inView: ElIsVisible1} = useInView({ threshold: 0.5 });

    const myRef1 = useRef()

    useEffect(() => {
       if(ElIsVisible1){
        myRef1.current.classList.add('animation')
       }

    }, [ElIsVisible1])


    return (
        <div className='projectContainer' ref={myRocket1}>
            <Container>
                <div className='projectInner' ref={myRef1}>
                    <div className='projectElem'>
                        <h3>31<span>+</span></h3>
                        <p>{t("Project.Projects")}</p>
                    </div>
                    <div className='projectElem'>
                        <h3>23<span>+</span></h3>
                        <p>{t("Project.Clients")}</p>
                    </div>
                    <div className='projectElem'>
                        <h3 className='countre'>5<span>+</span></h3>
                        <p>{t("Project.Countries")}</p>
                    </div>
                    <div className='projectElem'>
                        <h3>11<span>+</span></h3>
                        <p>{t("Project.Awords")}</p>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Project;