import React from 'react';
import Layout from './src/Layout';
import { createStackNavigator, createAppContainer } from "react-navigation";

import CharacterDetails from './src/CharacterDetails'



// const App = () => {
//     return <Layout />
//   }

const App = createStackNavigator({
  Layout: {
    screen: Layout,
  },
  CharacterDetails: {
    screen: CharacterDetails,
  },
}, {
    initialRouteName: 'Layout',
});


export default createAppContainer(App);