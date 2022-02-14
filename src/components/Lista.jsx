import React from 'react';
import { Container, ListGroup, Col,Card,Button,Row,ListGroupItem } from 'react-bootstrap';
class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaMoviles: '',
        };
    }


    componentDidMount() {
        this.setState({ listaMoviles: localStorage.getItem('listaMovilesFavoritos') });
    }
    componentWillUnmount() {
        localStorage.setItem('listaMovilesFavoritos', this.state.listaMoviles);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={8} md={6}>
                        <ListGroup>
                            {this.state.listaMarcas.map((item) => {
                                return (
                                    <ListGroup.Item>{item.nombre}</ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.state.imagenTelefono} />
                            <Card.Body>
                                <Card.Title>{this.state.telefonoSeleccionado.brand} {this.state.telefonoSeleccionado.phone_name}</Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Sistema operativo: {this.state.telefonoSeleccionado.os}</ListGroupItem>
                                <ListGroupItem>Dimension: {this.state.telefonoSeleccionado.dimension}</ListGroupItem>
                                <ListGroupItem>Almacenamiento:{this.state.telefonoSeleccionado.storage}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button
                                    variant="primary"
                                    type="button"
                                    
                                >
                                    Quitar de favoritos
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Lista;
