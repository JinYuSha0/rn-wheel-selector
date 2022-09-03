package com.reactnativewheelpicker.nativeComponent;

import android.content.Context;
import android.util.TypedValue;

import java.util.List;

public class Helper {
  public static int dp2px(Context context, float dpVal) {
    return (int) TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP,
      dpVal, context.getResources().getDisplayMetrics());
  }

  public static int findIndex(List<String> list, String value) {
    int index = 0;
    for (;index < list.size();index++) {
      if (value.equals(list.get(index))) break;
    }
    return index;
  }
}
