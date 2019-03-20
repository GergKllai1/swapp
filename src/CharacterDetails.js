import React from 'react'
import { View, Text } from 'react-native'

const CharacterDetails = props => {
  return (
   <View>
       <Text>
          Hello {props.name}
       </Text>
   </View>
  )
}

export default CharacterDetails
