import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default class VisibilityScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  header: {
    fontSize: 18,
    paddingLeft: 18,
    marginTop: 18,
    marginBottom: 0,
  },
  text: {
    fontSize: 12,
    paddingLeft: 18,
    marginVertical: 12,
  },
  buttonOverlayContainer: {
    flexDirection: 'row',
    paddingVertical: 6,
    justifyContent: 'center',
  },
  absoluteButton: {
    position: 'absolute',
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    textAlign: 'center',
    lineHeight: 30,
    height: 30,
  },
});
