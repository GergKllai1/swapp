import React from 'react';
import Characters from './src/Characters';
import { createStackNavigator, createAppContainer } from "react-navigation";

import CharacterDetails from './src/CharacterDetails'

const App = createStackNavigator({
  Characters: {
    screen: Characters,
  },
  CharacterDetails: {
    screen: CharacterDetails,
  },
}, {
    initialRouteName: 'Characters',
});


export default createAppContainer(App);