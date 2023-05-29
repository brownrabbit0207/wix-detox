import React, {Component} from 'react';
import { TextInput, NativeModules, Platform } from 'react-native';

const { NativeModule } = NativeModules;

  render() {
    return <TextInput {...this.props} nativeID={this.props.testID} />
  }
}

if (Platform.OS === 'android') {
  module.exports = AndroidTextInput;
} else {
  module.exports = TextInput;
}
