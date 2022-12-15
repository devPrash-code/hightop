import React, {useState, useEffect} from "react";
import slide1 from '../../public/img/slides/slide-1.jpg';
import slide2 from '../../public/img/slides/slide-2.jpg';
import slide3 from '../../public/img/slides/slide-3.jpg';

import './slider.css';

function Slider() {

    let slideInterval;
    let intervalTime = 8000; // this time depends on the progressbar time given in css file

    const slides = [
        {
            img: slide1,
            alt: "slide-1",
            desc: "there's nothing like new"
        },
        {
            img: slide2,
            alt: "slide-2",
            desc: "there's nothing like new"
        },
        {
            img: slide3,
            alt: "slide-3",
            desc: "there's nothing like new"
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderLength = slides.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliderLength - 1 ? 0 : currentSlide + 1)
    }

    function autoSlide() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        autoSlide()
        return () => clearInterval(slideInterval)
    }, [currentSlide]);

    return (
        <div className="slider">
            {
                slides.map((plate, key) => {
                    return (
                        <div className={key === currentSlide ? 'slide active' : 'slide'} key={key}>
                            <div className="row">
                                <div className="col-4">
                                    <div className="progressbar"></div>
                                </div>
                                <div className="col-8">
                                    <img src={plate.img} alt={plate.alt} />
                                </div>
                            </div>
                            <div className="container">
                                <div className="body-content">
                                    <h1>NEW<br/><span>COLLECTION</span></h1>
                                    <p>{plate.desc}</p>
                                    <button type="submit">SHOP NEW ARRIVALS</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider;