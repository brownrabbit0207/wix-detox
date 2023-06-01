package com.example;

import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.reactnativecommunity.checkbox.ReactCheckBoxPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.reactnativecommunity.slider.ReactSliderPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;

import java.util.Arrays;
import java.util.List;

class DetoxRNHost extends ReactNativeHost {
   protected DetoxRNHost(Application application) {
      super(application);
              new AsyncStoragePackage(),
              new ReactCheckBoxPackage(),
              new RNDateTimePickerPackage()
      );
   }
}
