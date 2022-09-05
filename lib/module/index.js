function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback, useRef } from 'react';
import { requireNativeComponent, UIManager, Platform, Text, View, StyleSheet } from 'react-native';
const ComponentName = 'WheelSelector';
const LINKING_ERROR = `The package 'react-native-wheel-picker' doesn't seem to be linked`;
const IOS_ERROR = `${ComponentName} only supports android platform`;
const IS_ANDROID = Platform.OS === 'android';
const NativeComponent = IS_ANDROID ? UIManager.getViewManagerConfig(ComponentName) != null ? requireNativeComponent(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
} : () => /*#__PURE__*/React.createElement(Text, null, IOS_ERROR);
export const WheelPickerView = props => {
  const {
    style,
    onValueChange,
    ...rest
  } = props;
  const preValue = useRef();

  const _onValueChange = useCallback(e => {
    const {
      value
    } = e.nativeEvent;

    if (preValue.current !== value) {
      preValue.current = value;
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(value);
    }
  }, []);

  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(NativeComponent, _extends({
    style: [styles.wheelpicker, style]
  }, rest, {
    onValueChange: _onValueChange
  })));
};
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  wheelpicker: {
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=index.js.map