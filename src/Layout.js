import React from 'react'
import { StyleSheet ,Text, View } from 'react-native';
import Characters from './Characters';

const Layout = props => {
  return (
    <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
        }}>
          <Characters style={styles.bigBlue} />
        </View>
  )
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
