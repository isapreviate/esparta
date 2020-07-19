import React from 'react';


class ToDoList extends React.Component {
  state = {
    listItem: '',
    list: [],
  }

  setListItem = ({ target: { value } }) => {
    this.setState({ listItem: value }, () => console.log(this.state))

  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { listItem } = this.state;

    let list = [...this.state.list];

    if (listItem.trim() === "" || listItem.length <= 3) {
      return alert("Preencha o campo!")
    }

    list.push(listItem);

    this.setState({ listItem: '', list: list });
  }


  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.setListItem}></input>
        <button>Adicionar Task</button>
      </form>

    )
  }
}

export default ToDoList;