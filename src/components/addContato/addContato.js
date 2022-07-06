import React from 'react';
import FormAddContato from "./formAddContato"
import contatos from "../App"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*FormAddContato.onsubmit = addPessoa;*/

class addContato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}Adicionar</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Adicionar Contato</ModalHeader>
          <ModalBody>
            <FormAddContato />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

/*function addPessoa(e){
    e.preventDefault();

    var nome = e.target.pessoaNome.value;
    var numero = e.target.pessoaNumero.value;
    var grupo = e.target.pessoaGrupo.value;
    var descricao = e.target.pessoaTexto.value;
    var foto = e.target.pessoaFoto.value;

    var pessoa = { nome, numero, grupo, descricao, foto }

    contatos.push(pessoa);
    FormAddContato.reset();
    console.log(pessoa);
}

Tentando fazer uma função para adicionar os contatos na array
que criei em App.js quando a pessoa clicasse em submit no
formAddContato.js

*/

export default addContato;
