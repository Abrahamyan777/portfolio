import { useInView } from 'react-intersection-observer';
import Container from '../components/container/container';
import './achtivity.scss'
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';


const Achtivity = (props) => {

    const { ref: myRocet, inView: ElIsVisible } = useInView({ threshold: 0.3 })
    const { ref: myRocetEx, inView: ElIsVisibleEx } = useInView({ threshold: 0.3 })

    const firstRefEd = useRef()
    const secondRefEx = useRef()


    useEffect(() => {
        if (ElIsVisible) {
            firstRefEd.current.classList.add("animation")
        }
        if (ElIsVisibleEx) {
            secondRefEx.current.classList.add("animationEx")
        }
    }, [ElIsVisible, ElIsVisibleEx])

    const {t} = useTranslation()

    return (
        <div className='achtiveContainer' ref={props.experienseRef}>
            <Container>
                <div className='achtiveInner'>
                    <h3>{t("Achtivity.My")} <span>{t("Achtivity.Achievements")}</span></h3>
                    <div className='main'>
                        <div className='education' ref={myRocet}>
                            <h4 className='title'>{t("Achtivity.Education")}</h4>
                            <ul ref={firstRefEd}>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2016 - 2020</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>{t("Achtivity.Yerevan State University")}
                                            <span>- {t("Achtivity.YSU")}</span>
                                        </h5>
                                        <p>
                                        {t("Achtivity.Faculty of Mathematics and Mechanics")}
                                            <br></br>
                                            {t("Achtivity.Mathematics")}
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2021 - 2022</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>{t("Achtivity.Programming trainings")}
                                        </h5>
                                        <p>
                                            Python Programming (basics)<br></br>
                                            SAS Programming (basics)
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2022 - 2022</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>BEEONCODE
                                            <span>"{t("Achtivity.Software Development Companies")}"</span>
                                        </h5>
                                        <p>
                                        {t("Achtivity.Software Development")}
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                            </ul>
                        </div>
                        <div className='experiense' ref={myRocetEx}>
                            <h4 className='title'>{t("Achtivity.Experiense")}</h4>
                            <ul ref={secondRefEx}>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>2019 - 2021</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>{t("Achtivity.Advertising and Marketing Communications")}
                                        </h5>
                                        <p>
                                            " NRG DESIGN " {t("Achtivity.COMPANY")}  <br></br>
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span> {t("Achtivity.June")} 15,  2022 - 2023</span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5>{t("Achtivity.IT Specialist Automation of business")}</h5>
                                        <p>
                                            EKey LLC <br></br>
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                                <li>
                                    <div className='timeLine-info'>
                                        <span>  2024 </span>
                                    </div>
                                    <div className='timeLine-content'>
                                        <h5> {t("Achtivity.IT Software developer")} </h5>
                                        <p>
                                            INGO ARMENIA
                                        </p>
                                    </div>
                                    <div className='timeLine-marker'></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Achtivity;