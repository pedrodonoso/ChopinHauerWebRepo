/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {Component} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Button,
  ButtonGroup,
  ListGroupItem,
  ListGroup
} from "shards-react";

import addpserviceService from '../services/pservices.service';
import PageTitle from "../components/common/PageTitle";
import EditPService from "../components/edit-pservice/EditPService";


class AllPService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      selected: {},
        open: false,
        PServiceList: [],
    };
    this.deleteHandler = this.deleteHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }
  toggle(post) {
    this.setState({
      ...this.state,
      selected: post,
      open: !this.state.open
    });


  }

  handleChange() {
    addpserviceService.getAll()
    .then((response) => {
        this.setState({
          ...this.state,
          PServiceList:  response.status === 200 ? response.data : [],
        })
    })
    }

  deleteHandler(id){
    addpserviceService.deletePServicio(id).then((response) =>{
      console.log("ELIMINADO " + response.data);
      this.handleChange();
    });
  }

  updateHandler(data){
    console.log(data);
    addpserviceService.updatePServicio(data).then((response) =>{
      console.log({
        text: "ACTUALIZADO ", data: data
      });
      this.handleChange();
    });
  }
  componentDidMount(){
    this.handleChange();
  }

  render() {
    const {
      open,
      PServiceList,
      selected,
    } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <EditPService open={open} thisToggle={this.toggle.bind(this,{})} post={selected} onSubmit={this.updateHandler.bind(this)}/>
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Todo el Personal de Servicio" subtitle="Personal de Servicio" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PServiceList.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <CardHeader>
                  <Badge className={`card-post__category bg-${idx}`}>
                    {post.profesion}
                  </Badge>
                </CardHeader>
                <CardBody>
                  <ListGroup small={true} flush={false}  key={post.id} align="center">
                    <ListGroupItem >
                      <Row>
                        <Col>
                          {post.nombres} {post.apellidos}
                        </Col>
                      </Row>
                    </ListGroupItem>
                         <ButtonGroup>
                            <Button
                              onClick={this.deleteHandler.bind(this, post.id)}>
                              Borrar
                            </Button>
                            <p></p>
                            <Button theme="secondary"
                              onClick={this.toggle.bind(this,post)}>
                              Editar
                            </Button>
                        </ButtonGroup>
                    </ListGroup>


                </CardBody>

              </Card>
            </Col>
          ))}
        </Row>


      </Container>
    );
  }
}

export default AllPService;
