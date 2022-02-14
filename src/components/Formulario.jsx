import React from 'react';
import { Container, Form, Button,Row,Col,Table,Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import uuid from 'react-uuid';

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlTabla:'https://api-mobilespecs.azharimm.site/v2/top-by-fans',
            tableData: [],
            listaMarcas: [],
            imagenTelefono:'',
            telefonoSeleccionado:'',
        }
        this.selectedItem= '';
        this.marcaSeleccionada='';

    }
    async componentDidMount() {
        const response = await fetch(this.state.urlTabla);
        const responseData = await response.json();
        const responseModelos = await fetch('https://api-mobilespecs.azharimm.site/v2/brands');
        const responseDataModelos = await responseModelos.json();
        this.selectedItem=responseData['data']['phones'][0]['detail'];
        this.setState({ tableData: responseData['data']['phones'], listaMarcas: responseDataModelos['data'] })
    }
    async cargarSeleccionado(){
        const response = await fetch(this.selectedItem);
        const responseData = await response.json();
        this.setState({telefonoSeleccionado:responseData['data'], imagenTelefono:responseData['data']['phone_images'][0]});
    }
    changeSelected = (item) => {
        this.selectedItem=item.detail;
      };

    render() {
        this.cargarSeleccionado();
        return (
            <div className="main-site">
                <Container>
                    <Form.Group className="mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select ref={this.modeloSeleccionado}>
                        {this.state.listaMarcas.map((item) => {
                                return (
                                    <option>{item.brand_name}</option>
                                );
                            })}
                        </Form.Select>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={this.filtrarMarca.bind(this)}
                        >
                            Filtrar
                        </Button>
                    </Form.Group>
                    <Row>
                        <Col lg={8} md={6}>
                            <Table responsive striped>
                                <thead>
                                    <tr key={uuid()}>
                                        <th>Modelo </th>
                                        <th>slug</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tableData.map((item) => {
                                        return (
                                            <tr
                                                key={uuid()}
                                                onClick={() => this.changeSelected(item)}
                                            >
                                                <td>{item.phone_name}</td>
                                                <td>{item.slug}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
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
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    /*
    <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      */
}
export default Formulario;