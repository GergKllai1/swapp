import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
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
        return <CharacterCard testID={character.name} key={character.name} navigation = {this.props.navigation} character = {character} />
    })
    return (
      <ScrollView testID='main' style={styles.bigBlue}>
        <View style={styles.position}>
        {CharacterDisplay}
        </View>
      </ScrollView>
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
  position: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 30
  },
});

export default Characters
