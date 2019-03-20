import React from 'react'
import { View, Text } from 'react-native'

const CharacterDetails = props => {
  return (
   <View>
       <Text>
          Hello {props.navigation.state.params.character.name}
       </Text>
   </View>
  )
}

export default CharacterDetails
