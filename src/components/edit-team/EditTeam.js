import React, {  useState,useEffect  } from 'react';
import { Modal,
  ModalBody,
  ModalHeader,Form,FormGroup,FormInput,Button } from "shards-react";


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import SearchTableList from "../add-new-team/SearchPServiceForTeam";

const EditTeam = ({post,open,thisToggle, onSubmit}) => {
  const [id,setId] = useState('');
  const [tag,setTag] = useState('');
  const [idlist, setIdlist] = useState('');
  const [setedTag,setSetedTag] = useState('');
  const [setedIdlist, setSetedIdlist] = useState('');

  useEffect(() => {    // Actualiza el título del documento usando la API del navegador
    setId(post.id);
    setTag(post.tag);
    setIdlist(post.idlist);
  },[]);

  function handleTeamSubmit(data) {
    console.log(data)
    if(data === "") {
      console.log("NO PUSHEASTE NADA")
    } else {
      console.log("CUUDADO")
      setSetedIdlist(data);
      console.log({
        list: idlist,
        setedlist: setedIdlist,
        data: data,
      });
      //setSetedIdlist(data);
    }

    };


    return(
    <Modal open={open} toggle={thisToggle} >
      <ModalHeader>Editar Team</ModalHeader>
      <ModalBody >
      <Form className="add-new-post">

        <FormGroup>
          <label>Nombre</label>
          <FormInput
            value={setedTag}
            onChange={(event) => { setSetedTag(event.target.value)}}
            size="lg"
            className="mb-3"
            placeholder= {tag} />
        </FormGroup>
        <SearchTableList onSubmit={handleTeamSubmit}/>
      </Form>
      <Button
        theme="primary"
        className="mb-2 mr-1"
        onClick={(event) => onSubmit({
          'id': id,
          'tag': setedTag === "" ? tag :  setedTag,
          'idlist': setedIdlist === "" ? idlist :  setedIdlist,
        })}
        >
          Editar
        </Button>
      </ModalBody>
    </Modal>
  );
  }



export default EditTeam;
