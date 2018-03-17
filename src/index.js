/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';
import Todo from './components/Todo';

const color = '#F5FCFF';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  },
});

export default class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'baz' },
      { id: 2, title: 'bar' },
    ],
  }

  addTodo = () => {
    console.tron.log('testing....');
    this.setState({ todos: [...this.state.todos, { id: Math.random(), title: 'foo' }] });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => <Todo key={todo.id} title={todo.title} />)}
        <Button title="Add" onPress={this.addTodo} />
      </View>
    );
  }
}
