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

class TeamsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    }
  }

  componentDidMount() {
    teamsService.getAll().then((response) => {
      this.setState({
        teams: response.status === 200 ? response.data : [],
      })
    });
  }


  render() {
    const { teams } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
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
                              <ListGroup small={true} flush={false}  className="my-2" key={pServiceItem.id} align="center">

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
                                <ListGroupItem>
                                  <Col lg="3">
                                    <ButtonGroup size="sm">
                                      <Button  onClick={console.log("editar")}>
                                        Editar
                                      </Button>
                                      <Button  onClick={console.log("Eliminar")}>
                                        Eliminar
                                      </Button>
                                    </ButtonGroup>
                                  </Col>
                                </ListGroupItem>

                              </ListGroup>
                            </Col>

                        )
                      })}
                  </Row>

                  </CardBody>
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
