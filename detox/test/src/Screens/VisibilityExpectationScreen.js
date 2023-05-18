import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import ScrollBarGradient from '../Views/ScrollBarGradient';
import BadgeButton from "../Views/BadgeButton";

export default class VisibilityExpectationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldMoveElement: false
    };
  }
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
  halfVisible: {
    position: 'relative',
    backgroundColor: '#ccc',
    textAlign: 'center',
    lineHeight: 30,
    height: 100
  },
});
