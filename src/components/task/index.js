import React from 'react';
import { Checkbox } from 'antd'






const Task = (props) => {
  return (
    <Checkbox>{props.task}</Checkbox>
  );
}

export default Task;
