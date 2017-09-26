import React from 'react';
import { View, ScrollView } from 'react-native';
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
    content: 'Aller voir Seb',
    status: 'En cours'
  },
  {
    id:3,
    content: 'Aller voir Olivier',
    status: 'En cours'
  },
   {
    id:4,
    content: 'Aller voir Seb',
    status: 'En cours'
  },
  {
    id:5,
    content: 'Aller voir Olivier',
    status: 'Terminé'
  },
  {
    id:6,
    content: 'Aller voir Olivier',
    status: 'En cours'
  },
   {
    id:7,
    content: 'Aller voir Seb',
    status: 'En cours'
  },
   {
    id:8,
    content: 'Aller voir Seb',
    status: 'En cours'
  },
  {
    id:9,
    content: 'Aller voir Olivier',
    status: 'En cours'
  },
  {
    id:10,
    content: 'Aller voir Olivier',
    status: 'En cours'
  },
   {
    id:11,
    content: 'Aller voir Seb',
    status: 'En cours'
  },
  {
    id:12,
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
      <View style={{flex: 1 }}>
        <Header content="Liste de taches" />
        <ScrollView>
          <TaskList taskList={this.state.taskList} />
        </ScrollView>
        <ButtonAddTask />
      </View>
    );
  }
}

