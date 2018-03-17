import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  static defaultProps = {
    title: 'default',
  };

  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    return (
      <View>
        <Text>{ this.props.title }</Text>
      </View>
    );
  }
}
