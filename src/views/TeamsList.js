import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  ListGroup,
  ListGroupItem,
  Badge,
  CardDeck,
  ButtonGroup,
  Button
} from "shards-react";
import teamsService from '../services/teams.service';

import PageTitle from "../components/common/PageTitle";
import addpserviceService from '../services/pservices.service';
import EditTeam from "../components/edit-team/EditTeam";
import EditPService from "../components/edit-pservice/EditPService";


class TeamsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      selectedPService: [],
      selectedTeam: [],
      openPService: false,
      openTeam: false,
    };
    this.editHandlerPService = this.editHandlerPService.bind(this);
    this.editHandlerTeam = this.editHandlerTeam.bind(this);
    this.deleteHandlerPService = this.deleteHandlerPService.bind(this);
    this.deleteHandlerTeam = this.deleteHandlerTeam.bind(this);

  }
  handleChange() {
    teamsService.getAll().then((response) => {
      this.setState({
        ...this.state,
        teams: response.status === 200 ? response.data : [],
      })
    });
    }

  editHandlerTeam(post) {
    console.log(post);
    this.setState({
      ...this.state,
      selectedTeam: post,
      open: !this.state.openTeam
    });
  }

  editHandlerPService(post) {
    console.log(post);
    this.setState({
      ...this.state,
      selectedPService: post,
      open: !this.state.openPService
    });
  }

  deleteHandlerPService(idTeam,idPService){
    console.log(idPService);
    let lista = [];
    lista.push(idPService);
    console.log(lista);
    teamsService.deleteToTeam(idTeam,lista).then((response) =>{
      console.log("ELIMINADO " + response.data);
      this.handleChange();
    });
  }

  deleteHandlerTeam(id){
    console.log("ID:"+id);
    teamsService.deleteTeam(id).then((response) =>{
      console.log("ELIMINADO " + response.data);
      this.handleChange();
    });

  }
  togglePService(post) {
    this.setState({
      ...this.state,
      selectedPService: post,
      openPService: !this.state.openPService
    });

  }

  toggleTeam(post) {
    this.setState({
      ...this.state,
      selectedTeam: post,
      openTeam: !this.state.openTeam
    });
  }

  updateHandlerPService(data){
    console.log(data);
    addpserviceService.updatePServicio(data).then((response) =>{
      console.log("ACTUALIZADO " + response.data);
      this.handleChange();
    });
  }

  updateHandlerTeam(data){
    console.log(data);
    teamsService.updatePServicio(data).then((response) =>{
      console.log("ACTUALIZADO " + response.data);
      this.handleChange();
    });
  }

  componentDidMount() {
    this.handleChange();
  }


  render() {
    const { teams, openTeam,openPService,selectedTeam,selectedPService} = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        <EditTeam open={openTeam} thisToggle={this.toggleTeam.bind(this,{})} post={selectedTeam} onSubmit={this.updateHandlerTeam}/>
        <EditPService open={openPService} thisToggle={this.togglePService.bind(this,{})} post={selectedPService} onSubmit={this.updateHandlerPService}/>
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Muestra de todos los Equipos" subtitle="Equipos de Personal de Servicio" className="text-sm-left" />
        </Row>

        <Row>
          {teams.map((team, index) => {
            return (
              <Col md="4" key={team.id}>
                <Card small className="card-post">
                  <CardHeader>
                    <CardTitle>
                      {team.tag}
                    </CardTitle>

                  </CardHeader>
                  <CardBody>
                    <Row  >
                      {team.personalEquipo.map((pServiceItem, index) => {
                        return (
                            <Col  key={pServiceItem.id}>
                              <ListGroup small={true} flush={false}  key={pServiceItem.id} align="center">

                                <ListGroupItem >
                                  <Row>
                                    <Col>
                                      {pServiceItem.nombres}

                                    </Col>
                                    <Col>
                                      <Badge> {pServiceItem.profesion}</Badge>
                                    </Col>
                                  </Row>


                                </ListGroupItem>
                                <ButtonGroup>
                                   <Button className="btn btn-warning btn-circle"
                                     onClick={this.deleteHandlerPService.bind(this, team.id, pServiceItem.id)}>
                                     <i className="fa fa-times"></i>
                                   </Button>
                                   <p></p>
                                   <Button className="btn btn-success btn-circle"
                                     onClick={this.editHandlerPService.bind(this,pServiceItem)}>

                                     <i className="fa fa-edit"></i>
                                   </Button>

                               </ButtonGroup>


                              </ListGroup>
                            </Col>

                        )
                      })}
                  </Row>

                  </CardBody>
                  <CardFooter>
                    <ButtonGroup>
                       <Button className="btn btn-warning btn-circle"
                         onClick={this.deleteHandlerTeam.bind(this, team.id)}>
                         <i className="fa fa-times"></i>
                       </Button>
                       <p></p>
                       <Button className="btn btn-success btn-circle"
                         onClick={this.editHandlerTeam.bind(this,team)}>

                         <i className="fa fa-edit"></i>
                       </Button>

                   </ButtonGroup>
                  </CardFooter>
                </Card>
              </Col>
            )
          })
        }
        </Row>
      </Container>
    );
  }

}

export default TeamsList;
