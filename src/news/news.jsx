import Container from '../components/container/container';
import './news.scss'
import Slider from 'react-slick';

import "./slick.scss";
import "./slick-theme.scss";
import { createPath } from 'react-router-dom';


const News = (props) => {

    const data = [
        {
            id: 1,
            data: "July 10,2022",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/1.jpg'
        },
        {
            id: 2,
            data: "July 30,2019",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/2.jpg'
        },
        {
            id: 3,
            data: "July 5,2019",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/3.jpg'
        },
        {
            id: 3,
            data: "July 30,2019",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        },
        {
            id: 3,
            data: "July 30,2019",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/5.jpg'
        },
        {
            id: 3,
            data: "July 20,2021",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/6.jpg'
        },
        {
            id: 3,
            data: "July 30,2020",
            title: 'Marketing Guide: 5 Steps to Success.',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 800,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]

    };
    return (
        <div className='newsContainer' ref={props.newsRef}>
            <Container>
                <div className='newsInner'>
                    <h2 className='latest'>  Latest
                        <span>News</span>
                    </h2>
                    <div className='newsSlider'>
                        <Slider {...settings}>
                            {
                                data.map(({ id, data, title, text, imgSlik }) => (
                                    <div key={id} className='card' >
                                        <div className='card-top'>
                                            <div className='imgWrapper'>
                                                <img src={imgSlik} alt={title} />
                                            </div>
                                            <h2 className='data'>{data}</h2>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>{title}</h3>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default News;