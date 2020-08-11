import React, { useState } from 'react';
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
} from "shards-react";

import EnhancedTable from "../add-new-team/SearchPServiceForTeam"
import teamsService from '../../services/teams.service';


const Team = ({ onSubmit }) => {
    const [lista, setLista] = useState('');
    const [tag, setTag] = useState('');

    function handleTeamSubmit(data) {
      setLista(data);
      console.log({name: "Kaaa?", list:data});
      //teamsService.create(tag,data).then();
      };


    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Especialidad del Equipo</label>
                  <FormInput
                    value={tag}
                    onChange={(event) => setTag(event.target.value)}
                    size="lg"
                    className="mb-3"
                    placeholder="Oncologico, Pabellón,etc." />
                </FormGroup>
              </Form>
              <EnhancedTable onSubmit={handleTeamSubmit} />
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({
                  'tag': tag, //TODO:verlo IMPORTANTE
                  'idlist': lista //TODO:verlo IMPORTANTE
                })}
                >
                  Crear
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

Team.propTypes = {
  onSubmit: PropTypes.func,
}

Team.defaultProps = {
  onSubmit: () => {},
}

export default Team;
