import { useInView } from "react-intersection-observer";
import Container from "../components/container/container";
import "./portfolio.scss"
import { useEffect, useRef } from "react";
import boximg from "../images/box.png"
import { NavLink } from "react-router-dom";


const PortfolioItems = (props) => {

    const Items = [
        {
            id: 1,
            img: boximg,
            title1: "3D Graphics",
            title2: "Templates",
        },
        {
            id: 2,
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/22.jpg",
            title1: "Web Design"
        },
        {
            id: 3,
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/33.jpg",
            title1: "Web Design"
        },
        {
            id: 4,
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/44.jpg",
            title1: "Development"
        },
        {
            id: 5,
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/55.jpg",
            title1: "Templates",
            title2: "Web Design",
        },
        {
            id: 6,
            img: "https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/portfolio/66.jpg",
            title1: "Development",
            title2: "3D Graphics",
        },

    ]
    return (

        Items.map(({ img, title1, title2, id }, index) => (
            <div className="ItemWrapper ItemGrid" key={index}  >
                <NavLink to={
                    id ===1 &&'https://abrahamyan777.github.io/' ||
                    id ===2 && "https://google.com"
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




    return (
        <div className="portfolioContainer" ref={props.portfolioRef}>
            <Container>
                <div className="portfolioInner" ref={myRocet}>
                    <h2>My  <span>Portfolio</span></h2>
                    {/* <div className="portfolio-filter">
                        <ul>
                            <li>
                                ALL
                            </li>
                            <li>
                                DESIGN
                            </li>
                            <li>
                                DEVELOPMENT
                            </li>
                            <li>
                                GRAPHICS
                            </li>
                            <li>
                                Templates
                            </li>
                        </ul>
                    </div> */}

                    <div className="portfolioGrid" ref={itemsRef}>
                        <PortfolioItems />
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Portfolio;