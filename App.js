import React from 'react';
import { StyleSheet ,Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
      }}>
        <Text style={styles.bigBlue}>Hello, world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  red: {
    color: 'red',
  },
});