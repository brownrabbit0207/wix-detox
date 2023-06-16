import {
  AppRegistry,
  NativeModules,
} from 'react-native';

import example from './src/app';

const { NativeModule } = NativeModules;

class exampleAndroid extends example {
  async componentDidMount() {
    await super.componentDidMount();
    await this._registerEarlyCrashIfNeeded();
  }

  async _registerEarlyCrashIfNeeded() {
    const launchArguments = await NativeModule.getLaunchArguments();
    if (launchArguments.simulateEarlyCrash) {
      console.warn('simulateEarlyCrash=true detected: Will crash in a few seconds from now (all-the-while keeping the app busy)...');
      this._setupBusyFutureCrash();
    }
  }

  /**
   * What we're aiming at here is to have the app crash while Detox is waiting for it to become *ready* (i.e. idle)
