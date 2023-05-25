import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text, NativeModules, Dimensions, Alert } from 'react-native';

const { NativeModule } = NativeModules;

export default class OverlayScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} testID='VerticalScrollView'>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Dismiss Alert?', 'Are you sure you want to dismiss the alert?', [
              {
                text: 'Dismiss',
                style: 'cancel',
              }
            ])
          }}
          style={styles.button}
          testID='ShowDismissibleAlertButton'
        <View style={styles.item}><Text style={styles.itemText}>Text8</Text></View>
        <View style={styles.item}><Text style={styles.itemText}>Text9</Text></View>
        <View style={styles.item}><Text style={styles.itemText}>Text10</Text></View>
      </ScrollView>
    );
  }
}

const { height } = Dimensions.get('window');
const itemHeight = height / 10 + 50;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: '#ffd9d9',
    height: itemHeight,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  text: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center'
  },
  item: {
    height: itemHeight,
    backgroundColor: '#d9d9ff',
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  itemText: {
    fontSize: 18,
    color: '#525252',
    textAlign: 'center'
  }
});
