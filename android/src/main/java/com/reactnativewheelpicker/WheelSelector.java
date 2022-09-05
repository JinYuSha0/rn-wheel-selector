package com.reactnativewheelpicker;

import android.text.TextUtils;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.reactnativewheelpicker.nativeComponent.Helper;
import com.reactnativewheelpicker.nativeComponent.WheelPicker;

import java.util.List;

public class WheelSelector extends WheelPicker {
  public List<String> mValueList;

  public WheelSelector(ReactContext reactContext) {
    super(reactContext);
    this.setOnWheelChangeListener(new OnWheelChangeListener() {
      @Override
      public void onWheelScrolled(int offset) {
      }

      @Override
      public void onWheelSelected(int position) {
        WritableMap event = Arguments.createMap();
        event.putString("value", mValueList.get(position));
        reactContext
          .getJSModule(RCTEventEmitter.class)
          .receiveEvent(getId(), "valueChange", event);
      }

      @Override
      public void onWheelScrollStateChanged(int state) {
      }
    });
  }

  public void setValueList(List<String> valueList) {
    mValueList = valueList;
  }

  public void setValue(String value) {
    if (mValueList != null && mValueList.size() > 0 && value != null && !TextUtils.isEmpty(value)) {
      this.setSelectedItemPosition(Helper.findIndex(mValueList,value),false);
    }
  }
}
