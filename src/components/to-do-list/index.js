import React from 'react';
import Task from '../task'


class ToDoList extends React.Component {
  state = {
    task: {
      text: '',
      status: 'to-do'
    },
    list: [],
  }

  setTask = ({ target: { value } }) => {
    this.setState({ task: { text: value, status: 'to-do' } })

  }

  removeTask = (key) => {
    const list = [...this.state.list]
    list.splice(key, 1);

    this.setState({ list: list });
    //this.props.cancelDelete()
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { task } = this.state;

    let list = [...this.state.list];

    if (task.text.trim() === "" || task.text.length < 3) {
      return alert("Preencha o campo!")
    }

    list.push(task);

    this.setState({
      task: {
        text: '',
        status: "to-do"
      },
      list: list
    });
  }


  render() {
    console.log(this.state)

    const { list, task } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input value={task.text} onChange={this.setTask}></input>
          <button>Adicionar Task</button>
        </form>

        <div>
          {list.map((task, key) => (
            <Task
              task={task.text}
              key={key}
              index={key}
              removeTask={this.removeTask}
            //cancelDelete={this.cancelDelete.bind(this)}
            />
          ))}
        </div>
      </>

    )
  }
}

export default ToDoList;