import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list';
import ButtonAddTask from './components/button-add-task';


const taskList = [
  {
    id:0,
    content: 'Aller voir Seb',
    status: 'En cours'
  },
  {
    id:1,
    content: 'Aller voir Olivier',
    status: 'En cours'
  },
  {
    id:2,
    content: 'Aller voir Ben',
    status: 'Terminé'
  }
];



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { taskList };
    }
    
    render() {
    return (
      <View>
        <Header content="Liste de taches" />
        <TaskList taskList={this.state.taskList} />
        <ButtonAddTask />
      </View>
    );
  }
}

