import React, { Component } from 'react';
import {
  Text,
  View,
  Switch,
} from 'react-native';

export default class AssertionsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false
    }
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text testID='main-text' style={{marginBottom: 20}} accessibilityLabel={'I contain some text'}>I contain some text</Text>
        <View testID='subtext-root' style={{marginBottom: 20}}>
  }
}
