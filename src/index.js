import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Todo from '~/components/Todo';
import '~/config/DevTools';

const todos = ['Fazer café', 'Estudar o GoNative'];

export default class App extends Component {
  state = {
    todos,
  };

  addTodo = () => {
    const { todos } = this.state;
    this.setState({ todos: [...todos, 'Novo Todo'] });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Todo key={todo} title={todo} />
        ))}
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
