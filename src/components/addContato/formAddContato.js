import React from "react";
import { 
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";

class formAddContato extends React.Component{

    render(){
        return(
        <Form>
        <FormGroup>
          <Label for="exampleName">Nome</Label>
          <Input type="name" name="name" id="pessoaNome" placeholder="digite o nome" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCellphone">Número</Label>
          <Input type="cellphone" name="cellphone" id="pessoaNumero" placeholder="digite o número" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Grupo</Label>
          <Input type="select" name="select" id="pessoaGrupo">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Notas</Label>
          <Input type="textarea" name="text" id="pessoaTexto" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Foto</Label>
          <Input type="file" name="file" id="pessoaFoto" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
        )
    }

}

export default formAddContato;
