import React, { useState ,useEffect} from 'react';
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
  Collapse

} from "shards-react";
import Test from '../forms/Test';



const CollapseAlert = ({open,text}) => {
  return(
    <Collapse open={open}>
        <span >
            {text}
        </span>
    </Collapse>
  );
}
const AddPService = ({onSubmit }) => {
    const [nombres, setNombres] = useState({nombres:'',valid:false,invalid:false});
    const [apellidos, setApellidos] = useState({apellidos:'',valid:false,invalid:false});
    const [rut, setRut] = useState({rut:'',valid:false,invalid:false});
    const [profesion, setProfesion] = useState({profesion:'',valid:false,invalid:false});
    const [correo, setCorreo] = useState({correo:'',valid:false,invalid:false});
    const [telefono, setTelefono] = useState({telefono:'',valid:false,invalid:false});

    const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    const validRutRegex =
    RegExp(/^([0-9])+\-([kK0-9])$/i);
    const validNombreRegex =
    RegExp(/^([a-z A-Z])+$/i);
    const validApellidoRegex =
    RegExp(/^([a-z A-Z])+$/i);
    const validProfesionRegex  =
    RegExp(/^([a-z A-Z])+$/i);
    const validTelefonoRegex =
    RegExp(/^([0-9])+$/i);

    const validCorreo = (e) => {
      var input = e.target.value;
      setCorreo((prevState) => ({...prevState, correo: input}));
      if(validEmailRegex.test(input))  {
          setCorreo((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setCorreo((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validRut = (e) =>{
      var input = e.target.value;
      setRut((prevState) => ({...prevState, rut: input}));
      if(validRutRegex.test(input))  {
          setRut((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setRut((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validNombre = (e) =>{
      var input = e.target.value;
      setNombres((prevState) => ({...prevState, nombres: input}));
      if(validNombreRegex.test(input))  {
          setNombres((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setNombres((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validApellido = (e) =>{
      var input = e.target.value;
      setApellidos((prevState) => ({...prevState, apellidos: input}));
      if(validApellidoRegex.test(input))  {
          setApellidos((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setApellidos((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validProfesion = (e) =>{
      var input = e.target.value;
      setProfesion((prevState) => ({...prevState, profesion: input}));
      if(validProfesionRegex.test(input))  {
          setProfesion((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setProfesion((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }

    const validTelefono = (e) =>{
      var input = e.target.value;
      setTelefono((prevState) => ({...prevState, telefono: input}));
      if(validTelefonoRegex.test(input))  {
          setTelefono((prevState) => ({...prevState, valid: true, invalid: false}));
        return true;
      } else {
          setTelefono((prevState) => ({...prevState, valid: false, invalid: true}));
        return false;
      }
    }





    return(
      <Row>
        {/* Editor */}
        <Col lg="9" md="12">
          <Card small className="mb-3">
            <CardBody>
              <Form className="add-new-post">
                <FormGroup>
                  <label>Nombre</label>
                  <FormInput
                    value= {nombres.nombres}
                    valid={nombres.valid}
                    invalid={nombres.invalid}
                    onChange={validNombre}
                    size="lg"
                    className="mb-3"
                    placeholder="Juanin" />
                  <CollapseAlert open={nombres.invalid} text="Debes ingresar tus nombres que contengan solo letras."/>
                </FormGroup>
                <FormGroup>
                  <label>Apellido</label>
                  <FormInput
                    value={apellidos.apellidos}
                    valid={apellidos.valid}
                    invalid={apellidos.invalid}
                    onChange={ validApellido}
                    size="lg"
                    className="mb-3 "
                    placeholder="Perez"
                    />
                  <CollapseAlert open={apellidos.invalid} text="Debes ingresar tus apellidos que contengan solo letras."/>
                </FormGroup>
                <FormGroup>
                  <label>Rut</label>
                  <FormInput
                    value={rut.rut}
                    valid={rut.valid}
                    invalid={rut.invalid}
                    onChange={validRut}
                    size="lg"
                    className="mb-3"
                    placeholder="12353345-K" />
                  <CollapseAlert open={rut.invalid} text="Debes ingresar un rut válido, de la forma 12234245-k"/>
                </FormGroup>
                <FormGroup>
                  <label>Profesión</label>
                  <FormInput
                    value={profesion.profesion}
                    valid={profesion.valid}
                    invalid={profesion.invalid}
                    onChange={ validProfesion}
                    size="lg"
                    className="mb-3"
                    placeholder="Enfermero" />
                  <CollapseAlert open={profesion.invalid} text="Debes ingresar una profesion que contenga solo letras."/>
                </FormGroup>
                <FormGroup>
                  <label>Correo</label>
                  <FormInput
                    value={correo.correo}
                    valid={correo.valid}
                    invalid={correo.invalid}
                    onChange={validCorreo}
                    size="lg"
                    className="mb-3"
                    placeholder="juan@gmail.com" />
                  <CollapseAlert open={correo.invalid} text="Debes ingresar un correo válido, de la forma juan@mail.com"/>
                </FormGroup>
                <FormGroup>
                  <label>Telefono</label>
                  <FormInput
                    value={telefono.telefono}
                    valid={telefono.valid}
                    invalid={telefono.invalid}
                    onChange={validTelefono}
                    size="lg"
                    className="mb-3"
                    placeholder="934669676" />
                  <CollapseAlert open={telefono.invalid} text="Debes ingresar un telefono que contenga solo números."/>
                </FormGroup>
              </Form>
              <Button
                theme="primary"
                className="mb-2 mr-1"
                onClick={(event) => onSubmit({
                  'nombres': nombres.nombres,
                  'apellidos': apellidos.apellidos,
                  'run': rut.rut,
                  'profesion':profesion.profesion,
                  'email':correo.correo,
                  'telefono':telefono.telefono
                })}
                >
                  Agregar
                </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }

AddPService.propTypes = {
  onSubmit: PropTypes.func,
}

AddPService.defaultProps = {
  onSubmit: () => {},
}

export default AddPService;
