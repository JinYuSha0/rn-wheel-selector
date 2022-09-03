import React, { useCallback, useRef } from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import type { StyleProp, NativeSyntheticEvent } from 'react-native';

const ComponentName = 'WheelPickerView';
const LINKING_ERROR = `The package 'react-native-wheel-picker' doesn't seem to be linked`;
const IOS_ERROR = `${ComponentName} only supports android platform`;
const IS_ANDROID = Platform.OS === 'android';

interface WheelPickerPropsCommon {
  data: { label: string; value: string }[];
  style?: StyleProp<ViewStyle>;
  value?: string;
  visibleItemCount?: number;
  cyclic?: boolean;
  selectedItemTextColor?: string;
  itemTextColor?: string;
  itemTextSize?: number;
  itemSpace?: number;
  indicator?: boolean;
  indicatorSize?: number;
  indicatorColor?: string;
  curved?: boolean;
  itemAlign?: 'center' | 'left' | 'right';
  itemClick?: boolean;
}

export interface WheelPickerProps extends WheelPickerPropsCommon {
  onValueChange?: (value: string) => void;
}

interface WheelPickerNativeProps extends WheelPickerPropsCommon {
  onValueChange?: (value: NativeSyntheticEvent<{ value: string }>) => void;
}

const NativeComponent = IS_ANDROID
  ? UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<WheelPickerNativeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      }
  : () => <Text>{IOS_ERROR}</Text>;

export const WheelPickerView: React.FC<WheelPickerProps> = (props) => {
  const { style, onValueChange, ...rest } = props;
  const preValue = useRef<string>();
  const _onValueChange = useCallback(
    (e: NativeSyntheticEvent<{ value: string }>) => {
      const { value } = e.nativeEvent;
      if (preValue.current !== value) {
        preValue.current = value;
        onValueChange?.(value);
      }
    },
    []
  );
  return (
    <View style={styles.container}>
      <NativeComponent
        style={[styles.wheelpicker, style]}
        {...rest}
        onValueChange={_onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  wheelpicker: {
    width: '100%',
    height: '100%',
  },
});
