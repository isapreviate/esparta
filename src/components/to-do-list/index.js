import React from 'react';
import Task from '../task'


class ToDoList extends React.Component {
  state = {
    task: '',
    list: [],
  }

  setTask = ({ target: { value } }) => {
    this.setState({ task: value })

  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { task } = this.state;

    let list = [...this.state.list];

    if (task.trim() === "" || task.length <= 3) {
      return alert("Preencha o campo!")
    }

    list.push(task);

    this.setState({ task: '', list: list });
  }


  render() {
    console.log(this.state)

    const { list } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.setTask}></input>
          <button>Adicionar Task</button>
        </form>

        <div>
          {list.map((task, key) => (
            <Task
              task={task}
              key={key}
            />
          )
          )
          }
        </div>
      </>

    )
  }
}

export default ToDoList;