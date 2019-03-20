import React from 'react'
import { StyleSheet , View } from 'react-native';
import Characters from './Characters';

class Layout extends React.Component {

  render (){
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 30}}>
          <Characters navigation = {this.props.navigation}  style={styles.bigBlue} />
      </View>
    )
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

export default Layout
