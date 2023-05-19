import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Orientation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      horizontal: false
    };
    console.log('Orientation react component constructed (console.log test)');
  }

  detectHorizontal({nativeEvent: {layout: {width, height,x,y}}}) {
    this.setState({
      horizontal: width > height
    });
  }

  render() {
    return (
