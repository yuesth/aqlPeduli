import { Carousel } from "react-bootstrap"
import { useState, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"



function carouselPart() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-80"
                    src={`images/carousel/aqlCarousel1.png`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`images/carousel/aqlCarousel1.png`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`images/carousel/aqlCarousel1.png`}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default carouselPart;

// const [index, setIndex] = useState(0);

// const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
// };