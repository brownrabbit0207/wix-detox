import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
  NativeEventEmitter,
  NativeModules
    };
    this.subscription = undefined;
    this.subscription = shakeEventEmitter.addListener('ShakeEvent', () => {
      console.log("Shake!!!");
      this.setState({ greeting: "Shaken, not stirred" });
    });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text testID='BondJamesBond' style={{ fontSize: 25 }}>
          {this.state.greeting}
        </Text>
      </View>
    );
  }

  componentWillUnmount() {
    console.log("Unsubscribing");
    this.subscription.remove();
  }
}
