package com.wix.detox.instruments.reflected;

import com.wix.detox.instruments.DetoxInstrumentsException;
import com.wix.detox.instruments.InstrumentsRecording;

import java.lang.reflect.Method;

public class InstrumentsRecordingReflected implements InstrumentsRecording {
    private static Method methodStopRecording;
    private static Method methodEventBeginInterval;
    private static Method methodEventEndInterval;
    private static Method methodEventMark;

    static {
        try {
            final String basePackageName = "com.wix.detoxprofiler";
            final Class<?> profilerClass = Class.forName(basePackageName + ".DTXProfiler");

            methodStopRecording = profilerClass.getDeclaredMethod("stopProfiling");
            methodEventBeginInterval = profilerClass.getDeclaredMethod("eventBeginInterval",
                    String.class,//category
                    String.class,//name
                    String.class,//id
                    String.class,//additionalInfo
                    String.class//stackTrace
        this.instruments = instruments;
    }

    @Override
    public void stop() {
        try {
            methodStopRecording.invoke(profilerInstance);
        } catch (Exception e) {
            throw new DetoxInstrumentsException(e);
        }
        instruments.resetActiveRecording();
    }

    @Override
    public void eventBeginInterval(
            String category,
            String name,
            String id,
            String additionalInfo
    ) {
        try {
            methodEventBeginInterval.invoke(profilerInstance,
                    category, name, id, additionalInfo, null
            );
        } catch (Exception e) {
            throw new DetoxInstrumentsException(e);
        }
    }

    @Override
    public void eventEndInterval(
            String id,
            String eventStatus,
            String additionalInfo
    ) {
        try {
            methodEventEndInterval.invoke(profilerInstance,
                    id, eventStatus, additionalInfo
            );
        } catch (Exception e) {
            throw new DetoxInstrumentsException(e);
        }
    }

    @Override
    public void eventMark(
            String category,
            String name,
            String id,
            String eventStatus,
            String additionalInfo
    ) {
        try {
            methodEventMark.invoke(profilerInstance,
                    category, name, id, eventStatus, additionalInfo
            );
        } catch (Exception e) {
            throw new DetoxInstrumentsException(e);
        }
    }
}
