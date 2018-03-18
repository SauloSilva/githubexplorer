import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default class HeaderRight extends Component {
  signOut = () => {
    // deslogar
  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    );
  }
}