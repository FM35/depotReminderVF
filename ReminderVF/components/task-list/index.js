import React from 'react';
import { List, ListItem } from 'react-native-elements';

const TaskList = ({ taskList }) => (
	<List>
	  {taskList.map(task => <ListItem key={task.id} title={task.content} />)}
	</List>
);

export default TaskList;

