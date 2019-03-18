import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import CharacterCard from './CharacterCard';

const URL = 'https://swapi.co/api/'

export class Characters extends Component {
    state = {
        characters: [{name: "Anders"}]
    }

    async componentDidMount() {
        const response = await axios.get(URL + 'people')
        const characters = response.data.results;
        this.setState({
            characters: characters
        })
    }
  render() {
    const CharacterDisplay = this.state.characters.map(character => {
        return <CharacterCard character = {character} />
    })
    return (
      <View>
        {CharacterDisplay}
      </View>
    )
  }
}

export default Characters
