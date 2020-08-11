import React, { Component  } from 'react';
import { Modal,
  ModalBody,
  ModalHeader,Form,FormGroup,FormInput,Button } from "shards-react";


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import SearchTableList from "../add-new-team/SearchPServiceForTeam";

class EditTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
        tag:  this.props.post.tag,
        idlist: this.props.post.idlist,
    };
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(data) {
    this.setState({
      ...this.state,
      tag: data.tag,
      idlist: data.idlist,
    });

    console.log(this.state);
  }

  handleTeamSubmit(data) {
    this.setState({
      ...this.state,
      idlist: data,
    });
    //teamsService.create(tag,data).then();
    };

  render() {
    const {
      tag,
      idlist
    } = this.state;
    return(
    <Modal open={this.props.open} toggle={this.props.thisToggle} >
      <ModalHeader>Editar Team</ModalHeader>
      <ModalBody >
      <Form className="add-new-post">

        <FormGroup>
          <label>Nombre</label>
          <FormInput
            value={tag}
            onChange={(event) => { this.setState({ ...this.state, tag: event.target.value})}}
            size="lg"
            className="mb-3"
            placeholder="Juanin" />
        </FormGroup>
        <SearchTableList onSubmit={this.handleTeamSubmit}/>
      </Form>
      <Button
        theme="primary"
        className="mb-2 mr-1"
        onClick={(event) => this.props.onSubmit({
          'tag': this.state.tag ,
          'idlist': this.state.idlist,
        })}
        >
          Editar
        </Button>
      </ModalBody>
    </Modal>
  );
  }


}

export default EditTeam;
