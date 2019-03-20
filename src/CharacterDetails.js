import React from 'react'
import { View, Text } from 'react-native'

const CharacterDetails = props => {
  return (
   <View
    style={{ 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 30}}
   >
       <Text>{props.navigation.state.params.character.name}</Text>
       <Text>Height: {props.navigation.state.params.character.height}</Text>
       <Text>Mass: {props.navigation.state.params.character.mass}</Text>
   </View>
  )
}

export default CharacterDetails
