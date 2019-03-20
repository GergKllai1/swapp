import React from 'react'
import { Button, View } from 'react-native'

const CharacterCard = (props) => {
  return (
    <View style={{ marginBottom : 20 }}>
        <Button 
        title={props.character.name}
        />
    </View>
  )
}


export default CharacterCard
