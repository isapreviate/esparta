import React from 'react';
import Task from '../task'
import { Modal } from 'antd';


class ToDoList extends React.Component {
  state = {
    task: {
      text: '',
      status: 'pending'
    },
    id: 0,
    list: [],
    visible: false
  }

  addTask = ({ target: { value } }) => {
    this.setState({ task: { text: value, status: 'pending' } })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { task, id } = this.state;
    task.id = id;
    let nextId = id + 1;

    let list = [...this.state.list];

    if (task.text.trim() === "" || task.text.length < 3) {
      return alert("Preencha o campo!")
    }

    list.push(task);

    this.setState({
      task: {
        text: '',
        status: 'pending'
      },
      id: nextId,
      list: list
    });
  }

  getTaskFromList = (tasks, id) => {
    let res = tasks.filter(elem => elem.id === id)
    return res[0]
  }

  changeStatus = (id) => {
    let list = [...this.state.list]
    console.log(list)

    let task = this.getTaskFromList(list, id)

    if (task.status === 'pending') {
      task.status = 'done'
    } else {
      task.status = 'pending'
    }

    this.setState({ list: list });
  }

  deleteConfimation = (id) => {
    this.setState({ visible: true, deleteId: id });
  }

  cancelDelete = () => {
    this.setState({ visible: false });
  };

  removeTask = () => {
    const { deleteId } = this.state
    let list = [...this.state.list]
    // list.splice(deleteId, 1);


    list = list.filter(elem => elem.id !== deleteId)

    console.log(list)

    this.setState({ list: list, visible: false });
  }


  render() {

    const { task, visible, list } = this.state;

    return (
      <>
        <div>
          <Modal
            visible={visible}
            onOk={this.removeTask}
            onCancel={this.cancelDelete}
            okText="Confirma"
            cancelText="Cancela"
          >
            <p>Tem certeza que deseja deletar esta tarefa?</p>
          </Modal>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input value={task.text} onChange={this.addTask}></input>
          <button>Adicionar Tarefa</button>
        </form>

        <div>
          <h3>Lista Pendências</h3>
          {list.filter(task => task.status === 'pending')
            .map((task, key) => (
              <Task
                task={task.text}
                key={key}
                id={task.id}
                removeTask={this.removeTask}
                status={task.status}
                changeStatus={this.changeStatus}
                deleteConfimation={this.deleteConfimation}
              />
            ))}
        </div>
        <hr />
        <h3>Lista Feitas</h3>
        <div>
          {list.filter(task => task.status === 'done')
            .map((task, key) => (
              <Task
                task={task.text}
                key={key}
                id={task.id}
                removeTask={this.removeTask}
                status={task.status}
                changeStatus={this.changeStatus}
                deleteConfimation={this.deleteConfimation}
              />
            ))}
        </div>
      </>

    )
  }
}

export default ToDoList;