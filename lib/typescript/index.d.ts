import React from 'react';
import { ViewStyle } from 'react-native';
import type { StyleProp } from 'react-native';
interface WheelPickerPropsCommon {
    data: {
        label: string;
        value: string;
    }[];
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
export declare const WheelPickerView: React.FC<WheelPickerProps>;
export {};
