import { useInView } from "react-intersection-observer";
import Container from "../components/container/container";
import "./portfolio.scss"
import { useEffect, useRef } from "react";
import labhorgini from "../images/labhorgini.png"
import binance from '../images/binance.png';
import  grid from '../images/grid.png'
import  crypto from '../images/crypto.png'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


const PortfolioItems = (props) => {

    const Items = [
        {
            id: 1,
            img: grid ,
            title1: "Web Design",
            title2: "Templates",
        },
        {
            id: 2,
            img: binance,
            title1: " Web Design",
            
        },
        {
            id: 3,
            img: labhorgini ,
            title1: "Web Design",
            title2: "Templates",
        },
        {
            id: 4,
            img: crypto ,
            title1: "Web Design",
            title2: "Templates",
        },

    ]
    return (

        Items.map(({ img, title1, title2, id }, index) => (
            <div className="ItemWrapper ItemGrid" key={index}  >
                <NavLink to={
                    id ===1 &&'https://abrahamyan777.github.io/grid/' ||
                    id ===2 &&'https://abrahamyan777.github.io/binance/' ||
                    id ===3 && "https://abrahamyan777.github.io/" ||
                    id ===4 && "https://abrahamyan777.github.io/crypto/"
                            }
             target="blank">
                    <div className="ItemsInner" >
                        <div className="ItemsImg">
                            <img src={img} alt="img" />
                            <div className="overlay">
                                <h3>
                                    <span>{title1}</span>
                                    {title2 && <span>{title2}</span>}
                                </h3>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        ))


    )
}


const Portfolio = (props) => {

    const itemsRef = useRef()

    const { ref: myRocet, inView: ElIsVisible } = useInView({ threshold: 0.3 })

    useEffect(() => {
        if (ElIsVisible) {
            itemsRef.current.classList.add("animationPort")
        }

    }, [ElIsVisible])

    const {t} = useTranslation()




    return (
        <div className="portfolioContainer" ref={props.portfolioRef}>
            <Container>
                <div className="portfolioInner" ref={myRocet}>
                    <h2>{t("Portfolio.My")}  <span>{t("Portfolio.Portfolio")} </span></h2>
                    <div className="portfolioGrid" ref={itemsRef}>
                        <PortfolioItems />
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Portfolio;