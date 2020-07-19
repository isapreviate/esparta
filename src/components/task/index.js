import React from 'react';
import './index.css'
import { Checkbox, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'


class Task extends React.Component {
  state = {
    visible: false
  }

  deleteConfimation = () => {
    this.setState({ visible: true });
  }

  cancelDelete = () => {
    this.setState({ visible: false });
  };


  render() {
    const { visible } = this.state;
    return (


      <>
        <div>
          <Modal
            visible={visible}
            onOk={this.props.removeTask}
            onCancel={this.cancelDelete}
            okText="Confirma"
            cancelText="Cancela"
          >
            <p>Tem certeza que deseja deletar esta tarefa?</p>
          </Modal>
        </div>


        <Checkbox>
          {this.props.task}
          < button onClick={this.deleteConfimation} > <DeleteOutlined /></button >
        </Checkbox >
      </>
    );
  }
}

export default Task;
