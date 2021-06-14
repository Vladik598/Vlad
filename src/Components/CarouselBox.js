import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel"
import pokImg from '../assets/pok.jpg';
import ricardoImg from '../assets/ricardo.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={pokImg}
                        alt="pok"
                    />
                    <Carousel.Caption>
                        <h3>Forest image</h3>
                        <p>Lorem ipsuwersvs adsfadfwer adfaf</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ricardoImg}
                        alt="recardo"
                    />
                    <Carousel.Caption>
                        <h3>Dark Forest image</h3>
                        <p>Lorem ipsuwersvs adsfadfwer adfaf</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
