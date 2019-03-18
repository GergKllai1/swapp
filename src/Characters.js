import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'

const URL = 'https://swapi.co/api/'

export class Characters extends Component {
    state = {
        name: ''
    }

    async componentDidMount() {
        const response = await axios.get('https://swapi.co/api/people/1')
        const name = response.data.name;
        this.setState({
            name: name
        })
    }
  render() {
    return (
      <View>
        <Text style={this.props.style}> Hello {this.state.name}  </Text>
      </View>
    )
  }
}

export default Characters
