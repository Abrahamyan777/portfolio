import Container from '../components/container/container';
import './news.scss'
import Slider from 'react-slick';

import "./slick.scss";
import "./slick-theme.scss";


const News = () => {

    const data = [
        {
            id: 1,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        },
        {
            id: 2,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/2.jpg'
        },
        {
            id: 3,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        },
        {
            id: 3,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/2.jpg'
        },
        {
            id: 3,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        },
        {
            id: 3,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        },
        {
            id: 3,
            title: 'sss',
            imgSlik: 'https://maraviyainfotech.com/projects/masterly/demo-2/assets/img/news/4.jpg'
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
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
        <div className='newsContainer'>
            <Container>
                <div className='newsInner'>
                    <h2 className='latest'>  Latest
                        <span>News</span>
                    </h2>
                    <div className='newsSlider'>
                        <Slider {...settings}>
                            {
                                data.map(({ id, title, imgSlik }) => (
                                    <div key={id} className='card' >
                                        <div className='card-top'>
                                            <img src={imgSlik} alt={title} />
                                            <h2>{title}</h2>
                                        </div>
                                        <div className='card-bottom'>
                                            <h3>AASdfasdf</h3>
                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
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