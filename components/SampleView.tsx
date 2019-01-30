import React, { Component } from 'react';
import { Text, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { State } from '../store/modules';
import { pingActions } from '../store/modules/ping';
import todo, { todoActions } from '../store/modules/todo';
import { bindActionCreators } from 'redux';
import { Todo } from '../models/todo';

type Props = {
  ping: string;
  PingActions: typeof pingActions;
  todos: Todo[];
  TodoActions: typeof todoActions;
};

class SampleView extends Component<Props, {}> {
  componentDidMount() {
    // this.props.TodoActions.getTodoById(1);
    this.props.TodoActions.getTodos();
  }
  render() {
    return (
      <ScrollView>
        <Text>Hello Sample View! {this.props.ping}</Text>
        <Button title="Hello" onPress={() => this.props.PingActions.ping()} />
        {this.props.todos.length > 0 &&
          this.props.todos.map(todo => <Text key={todo.id}>{todo.title}</Text>)}
      </ScrollView>
    );
  }
}

export default connect(
  ({ ping, todo }: State) => ({
    ping: ping.ping,
    todos: todo.todos,
  }),
  dispatch => ({
    PingActions: bindActionCreators(pingActions, dispatch),
    TodoActions: bindActionCreators(todoActions, dispatch),
  })
)(SampleView);
