import React from 'react';
import './index.css'
import { Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'


class Task extends React.Component {

  check = (id) => {

    this.props.changeStatus(id)
  }

  render() {

    return (
      <div >
        <Checkbox
          checked={this.props.status === 'done'}
          onChange={() => this.check(this.props.id)}
        >
          <span className={this.props.status}>{this.props.task}</span>
          < button onClick={() => this.props.deleteConfimation(this.props.id)} > <DeleteOutlined /></button >
        </Checkbox >
      </div>
    );
  }
}

export default Task;
