import React, { Component } from 'react';
import axios from 'axios';
import {
    Card,
    Container,
    Col,
    Row,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/books`)
        .then(res => {
            this.setState({
                books: res.data
            })
        })
    }

    render() {
        const { books } = this.state;
        console.log(books);
        return (
            <div className="Home">
                <Container fluid="sm">
                    <Row className="mt-5">
                        {books.map(item => (
                            <Col>
                                <Card>
                                    <CardImg
                                    src="https://loremflickr.com/320/240"
                                    top width="100%"
                                    />
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardText>{item.content}</CardText>
                                        <Button>Add to cart</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}