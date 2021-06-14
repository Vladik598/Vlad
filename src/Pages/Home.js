import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardDeck, Card, Button, Row, Col, Media } from "react-bootstrap"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded:true,
                    error
                }); 
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error){
            return <p> ERROR {error.message}</p>
        } else if(!isLoaded){
            return <p> Loading... </p>
        } else {
            return (
                <>
                    <CarouselBox></CarouselBox>
                    <h2 className="text-center m-4">Our blog</h2>
                    <Container>
                        <Row>
                            <Col md={9}>
                                {items.map(item => (
                                    <Media className="m-5" key={item.name}>
                                    <img 
                                        width={150}
                                        height={150}
                                        className='mr-3'
                                        src={item.strDrinkThumb}
                                        alt="js"
                                    />
                                     <Media.Body>
                                         <h4 className="text-center">Author:</h4>
                                         <h5 className="text-left">{item.strDrink}</h5>
                                         <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                                         <p className='text-right'>2021-05-30 15:41</p>
                                         <p className='text-left'>Likes: </p>
                                     </Media.Body>
                                </Media>
                                ))}
                                
                                
                            </Col>
                        </Row>
                    </Container>
                </>
                )
        }
        
    }
}
