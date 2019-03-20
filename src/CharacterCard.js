import React from 'react'
import { Button, View } from 'react-native'

class CharacterCard extends React.Component {

  render(){
    return (
      <View style={{ marginBottom : 20 }}>
          <Button 
          title={this.props.character.name}
          onPress={() => this.props.navigation.navigate('CharacterDetails',{name: "Hello"})}
          />
      </View>
    )
  }
  
}

export default CharacterCard
