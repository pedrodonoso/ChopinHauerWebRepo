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
  ListGroup,
  ListGroupItem,
  Badge,
  ButtonGroup,
  Button
} from "shards-react";
import teamsService from '../services/teams.service';

import PageTitle from "../components/common/PageTitle";
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
    this.handleChange = this.handleChange.bind(this);
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
        openPService: false,
        openTeam: false,
        selectedPService: [],
        selectedTeam: [],

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



  updateHandlerTeam(data){
    console.log({strng:"UpdateHandlerTeam",data:  data})
    teamsService.addToTeam(data.id,data.idlist).then((response) => {
      console.log({string:"ACTUALIZADO " ,data:response.data});

    });
    this.handleChange();
  }


  componentDidMount() {
    this.handleChange();
  }


  render() {
    const { teams, openTeam,openPService,selectedTeam,selectedPService} = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        <EditTeam open={openTeam} thisToggle={this.toggleTeam.bind(this,{})} post={selectedTeam} onSubmit={this.updateHandlerTeam.bind(this)}/>
        <EditPService open={openPService} thisToggle={this.togglePService.bind(this,{})} post={selectedPService} />
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
                                  <Col>
                                    <Row>
                                      <Badge> {pServiceItem.profesion}</Badge>
                                    </Row>
                                    <Row>
                                      {pServiceItem.nombres}
                                    </Row>
                                  </Col>


                                </ListGroupItem>
                                <ButtonGroup>
                                   <Button className="btn btn-warning btn-circle"
                                     onClick={this.deleteHandlerPService.bind(this, team.id, pServiceItem.id)}>
                                     <i className="fa fa-times"></i>
                                   </Button>
                               </ButtonGroup>
                              </ListGroup>
                            </Col>

                        )
                      })}
                  </Row>

                  </CardBody>
                  <CardFooter>
                    <Col md="4">
                      <ButtonGroup >
                         <Button className="btn btn-warning btn-circle"
                           onClick={this.deleteHandlerTeam.bind(this, team.id)}>
                           <i className="fa fa-times"></i>
                         </Button>
                         <p></p>
                         <Button className="btn btn-success btn-circle"
                           onClick={this.toggleTeam.bind(this,team)}>

                           <i className="fa fa-edit"></i>
                         </Button>
                     </ButtonGroup>
                    </Col>
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
