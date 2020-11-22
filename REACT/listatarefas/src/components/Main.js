import React, { Component } from 'react';

import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';
// componente com estado
export default class Main extends Component {
  // criando variáveis de estado
  state = {
    novaTarefa: '',
    tarefas: [],
    // flag para sabermos se a tarefa está sendo editada ou não
    index: -1,

  };

  // criando e configurando local storage JSON
  // função que carrega as tarefas do local storage no estado tarefas, sempre que a página for carregada(componente montado)
  componentDidMount() {
    // carrega as tarefas armazenadas
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    // se não existir tarefas no local storage, encerra
    if (!tarefas) return;
    // seta o stado tarefas com esses valores
    this.setState({ tarefas });
  }

  // função que atua toda vez que há atualização de componente. Nesse caso a cada tecla inserida no input
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    // se as tarefas atuais foram iguais a anteriores, encerra
    if (tarefas === prevState.tarefas) return;
    // armazena as tarefas localmente
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // recebendo valores de estado para lista de tarefas
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    // eliminando os espaço no início e fim do input
    novaTarefa = novaTarefa.trim();
    // se o índice da tarefa for diferente de -1[já existe uma tarefa igual a novaTarefa]
    if (tarefas.indexOf(novaTarefa) !== -1) return;
    // recebo as tarefas atuais
    const novasTarefas = [...tarefas];
    // se estivermos criando algo [index -1]
    if (index === -1) {
      // atualizo com as tarefas atuais mais a nova
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
      // se não faço inicio a edição dos dados
    } else {
      // seto o valor da tarefa atual com o valor do input
      novasTarefas[index] = novaTarefa;
      // copio a lista de tarefa com a lista de tarefa atualizada e index para -1
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }

  // captura cada input do usuário
  handlechange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleDelete = (e, index) => {
    // recebe as tarefas atuais
    const { tarefas } = this.state;
    // copia as tarefas atuais para a lista que será atualizada
    const novasTarefas = [...tarefas];
    // deleta o elemento clicado
    novasTarefas.splice(index, 1);
    this.setState({
      tarefas: [...novasTarefas],
    });
  }

  handleEdit = (e, index) => {
    // recebe as tarefas atuais
    const { tarefas } = this.state;
    // seta o input com o valor da tarefa selecionada
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handlechange={this.handlechange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />

      </div>
    );
  }
}
