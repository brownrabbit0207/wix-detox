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
} from 'react-native';
const { ShakeEventEmitter } = NativeModules;

const shakeEventEmitter = new NativeEventEmitter(ShakeEventEmitter);

export default class ShakeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    this.subscription.remove();
  }
}
