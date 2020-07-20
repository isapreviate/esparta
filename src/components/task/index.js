import React from 'react';
import './index.css'
import { Button, Card, Checkbox, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

class Task extends React.Component {

  check = (id) => {
    this.props.changeStatus(id);
  }

  render() {

    return (

      <Card style={{ textAlign: "left" }}>

        <Checkbox
          checked={this.props.status === 'done'}
          onChange={() => this.check(this.props.id)}
        >
          <span className={this.props.status}>{this.props.task}</span>
        </Checkbox >

        <Tooltip title="delete" >
          <Button
            style={{ float: "right" }}
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => this.props.deleteConfimation(this.props.id)}
          />
        </Tooltip>

      </Card>

    );
  }
}

export default Task;
