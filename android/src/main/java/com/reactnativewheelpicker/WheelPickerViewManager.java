package com.reactnativewheelpicker;

import android.graphics.Color;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import com.reactnativewheelpicker.nativeComponent.Helper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class WheelPickerViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "WheelPickerView";

    @Override
    @NonNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    @NonNull
    public View createViewInstance(ThemedReactContext reactContext) {
        return new WheelPickerView(reactContext);
    }

    @ReactProp(name = "data")
    public void setData(WheelPickerView view, ReadableArray data) {
      List<String> labelList = new ArrayList<String>();
      List<String> valueList = new ArrayList<String>();
      for (int i = 0; i < data.size(); i++) {
        ReadableMap item = data.getMap(i);
        labelList.add(item.getString("label"));
        valueList.add(item.getString("value"));
      }
      view.setData(labelList);
      view.setValueList(valueList);
    }

    @ReactProp(name = "value")
    public void setValue(WheelPickerView view, String value) {
      view.setValue(value);
    }

    @ReactProp(name = "backgroundColor")
    public void setBackgroundColor(WheelPickerView view, String color) {
      view.setBackgroundColor(Color.parseColor(color));
    }

    @ReactProp(name = "visibleItemCount")
    public void setVisibleItemCount(WheelPickerView view, int count) {
      view.setVisibleItemCount(count);
    }

    @ReactProp(name = "cyclic")
    public void setCyclic(WheelPickerView view, boolean isCyclic) {
      view.setCyclic(isCyclic);
    }

    @ReactProp(name = "selectedItemTextColor")
    public void setSelectedItemTextColor(WheelPickerView view, String color) {
      view.setSelectedItemTextColor(Color.parseColor(color));
    }

    @ReactProp(name = "itemTextColor")
    public void setItemTextColor(WheelPickerView view, String color) {
      view.setItemTextColor(Color.parseColor(color));
    }

    @ReactProp(name = "itemTextSize")
    public void setItemTextSize(WheelPickerView view, int size) {
      view.setItemTextSize(Helper.dp2px(view.getContext(), size));
    }

    @ReactProp(name = "itemSpace")
    public void setItemSpace(WheelPickerView view, int space) {
      view.setItemSpace(Helper.dp2px(view.getContext(), space));
    }

    @ReactProp(name = "indicator")
    public void setIndicator(WheelPickerView view, boolean hasIndicator) {
      view.setIndicator(hasIndicator);
    }

    @ReactProp(name = "indicatorSize")
    public void setIndicatorSize(WheelPickerView view, int size) {
      view.setIndicatorSize(Helper.dp2px(view.getContext(), size));
    }

    @ReactProp(name = "indicatorColor")
    public void setIndicatorColor(WheelPickerView view, String color) {
      view.setIndicatorColor(Color.parseColor(color));
    }

    @ReactProp(name = "curved")
    public void setCurved(WheelPickerView view, boolean isCurved) {
      view.setCurved(isCurved);
    }

    @ReactProp(name = "itemAlign")
    public void setItemAlign(WheelPickerView view, String itemAlign) {
      int align = 0;
      switch (itemAlign) {
        case "left":
          align = 1;
          break;
        case "right":
          align = 2;
          break;
        default:
          break;
      }
      view.setItemAlign(align);
    }

    @ReactProp(name = "itemClick")
    public void setItemClick(WheelPickerView view, boolean isItemClick) {
      view.setItemClick(isItemClick);
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
      return MapBuilder.<String, Object>builder().put(
        "valueChange",
        MapBuilder.of(
          "phasedRegistrationNames",
          MapBuilder.of("bubbled", "onValueChange")
        )
      ).build();
    }
}
