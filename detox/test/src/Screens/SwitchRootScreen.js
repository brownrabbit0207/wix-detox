import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => NativeModule.switchToNativeRoot()}>
          <Text style={{color: 'blue', marginBottom: 20}}>{`Switch to a new native root`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NativeModule.switchToMultipleReactRoots()}>
          <Text style={{color: 'blue', marginBottom: 20}}>{`Switch to multiple react roots`}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
