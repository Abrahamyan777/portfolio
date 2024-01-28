import './homeSection.scss';
import img from './../images/imag.jpeg'
import { NavLink } from 'react-router-dom';
import Container from '../components/container/container';
import cv from '../files/Grigor_Abrahamyan_CV.pdf'
import { useTranslation } from 'react-i18next';

const HomeSection = (props) => {
    const hendleClick = (moreInfo) => {
        if (moreInfo === "Experience") {
            props.experienseRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const onButtonClick = (cv) => {
        const pdfUrl = cv;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = cv;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const { t } = useTranslation()

    return (
        <div className="homeSection home-ms" ref={props.homeRef}>
            <Container>
                <div className='homeSectionInner' ref={props.topRef}>
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
                                <h1 className='mySelf'> {t("HomeSectio.I'm")}<span>  {t("HomeSectio.Grigor")} </span>
                                </h1>
                                <h2> <span>-</span> {t("HomeSectio.text1")} </h2>
                                <h2>
                                    <span>-</span>{t("HomeSectio.text2")}
                                </h2>
                                <p>
                                    {t("HomeSectio.text3")}
                                </p>
                                <div className='tooBtn'>
                                    <NavLink className='ms-btn' onClick={() => onButtonClick(cv)} >{t("HomeSectio.Download CV")}</NavLink>
                                    <NavLink onClick={() => hendleClick("Experience")}>{t("HomeSectio.More Info")}</NavLink>
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