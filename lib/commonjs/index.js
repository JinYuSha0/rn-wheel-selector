"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WheelPickerView = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ComponentName = 'WheelSelector';
const LINKING_ERROR = `The package 'react-native-wheel-picker' doesn't seem to be linked`;
const IOS_ERROR = `${ComponentName} only supports android platform`;
const IS_ANDROID = _reactNative.Platform.OS === 'android';
const NativeComponent = IS_ANDROID ? _reactNative.UIManager.getViewManagerConfig(ComponentName) != null ? (0, _reactNative.requireNativeComponent)(ComponentName) : () => {
  throw new Error(LINKING_ERROR);
} : () => /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, IOS_ERROR);

const WheelPickerView = props => {
  const {
    style,
    onValueChange,
    ...rest
  } = props;
  const preValue = (0, _react.useRef)();

  const _onValueChange = (0, _react.useCallback)(e => {
    const {
      value
    } = e.nativeEvent;

    if (preValue.current !== value) {
      preValue.current = value;
      onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(value);
    }
  }, []);

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(NativeComponent, _extends({
    style: [styles.wheelpicker, style]
  }, rest, {
    onValueChange: _onValueChange
  })));
};

exports.WheelPickerView = WheelPickerView;

const styles = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  wheelpicker: {
    width: '100%',
    height: '100%'
  }
});
//# sourceMappingURL=index.js.map