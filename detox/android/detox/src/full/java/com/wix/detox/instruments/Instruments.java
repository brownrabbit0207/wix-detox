package com.wix.detox.instruments;

import android.content.Context;

import java.io.File;
    InstrumentsRecording getActiveRecording();

    InstrumentsRecording startRecording(
            Context context,
            boolean recordPerformance,
            long samplingInterval,
            File recordingFile,
            boolean recordReactNativeTimersAsEvents
    );
}
