import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Header from './components/header';



export default class App extends React.Component {
  render() {
    return (
      <View>
     
      <Header content="Liste de taches" />
      


      <Button
      title='BUTTON' />

      


      <Icon
      name='sc-telegram'
      type='evilicon'
      color='#517fa4'
      />

      </View>

     
   
    );
  }
}