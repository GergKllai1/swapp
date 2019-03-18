import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Characters extends Component {
    state = {
        text: 'World'
    }
  render() {
    return (
      <View>
        <Text style={this.props.style}> Hello {this.state.text}  </Text>
      </View>
    )
  }
}

export default Characters
