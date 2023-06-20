import React from 'react';
import {
  NativeModules,
} from 'react-native';
import AbstractArgsListScreen from './AbstractArgsListScreen';

const { NativeModule } = NativeModules;

export default class LaunchArgsScreen extends AbstractArgsListScreen {
  constructor(props) {
