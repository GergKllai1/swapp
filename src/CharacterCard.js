import React from 'react'
import { Text, View } from 'react-native'

const CharacterCard = (props) => {
  return (
    <View>
        <Text>Name: {props.character.name} </Text>
    </View>
  )
}

export default CharacterCard
