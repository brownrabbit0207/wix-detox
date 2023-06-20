import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Orientation extends Component {

  constructor(props) {
  }

  render() {
    return (
      <View onLayout={this.detectHorizontal.bind(this)} style={{flex: 1, paddingTop: 20, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text testID="currentOrientation" style={{fontSize: 25, marginTop: 50}}>
          {this.state.horizontal ? 'Landscape' : 'Portrait'}
        </Text>
      </View>
    );
  }
}
