import React from 'react';
import {
  NativeModules,
} from 'react-native';
import AbstractArgsListScreen from './AbstractArgsListScreen';
  }

  async readArguments() {
    return await NativeModule.getLaunchArguments();
  }

  getTitle() {
    return 'Launch Arguments';
  }
}
