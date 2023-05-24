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

    const INTERVAL = 1000;
    const ITERATIONS = 8;

    let count = 0;

    const handler = () => {
      count++;

      if (count === ITERATIONS) {
        console.warn('simulateEarlyCrash=true', 'Simulating a crash now!');
        throw new Error('Simulating early crash');
      }
      setTimeout(handler, INTERVAL);
    };
    setTimeout(handler, INTERVAL);
  }
}

AppRegistry.registerComponent('example', () => exampleAndroid);
