# rn-wheel-selector

wheel-picker only Android is supported

developed on the basis of [AigeStudio/WheelPicker](https://github.com/AigeStudio/WheelPicker)

## Installation

```sh
npm install rn-wheel-selector

yarn add rn-wheel-selector
```

## Usage

```js
import { WheelPickerView } from 'rn-wheel-selector';

<WheelPickerView data={[]} />;
```

## Props

| Name                  | Description                             | Detail                           |
| --------------------- | --------------------------------------- | -------------------------------- |
| data                  | Data source                             | {lebal: string, value: string}[] |
| style                 | Style                                   | StyleProp\<ViewStyle\>           |
| value                 | Selected value                          | string                           |
| visibleItemCount      | Visible item count                      | number                           |
| cyclic                | Loop scroll                             | boolean                          |
| selectedItemTextColor | Selected item text color                | string                           |
| itemTextColor         | Unselected item text color              | string                           |
| itemTextSize          | Item text size (unit dp)                | number                           |
| itemSpace             | Item vertical direction space (unit dp) | number                           |
| indicator             | Display indicator                       | boolean                          |
| indicatorSize         | Indicator line height (unit dp)         | number                           |
| indicatorColor        | Indicator line color                    | string                           |
| curved                | Curved style                            | boolean                          |
| itemAlign             | Item text align                         | center \| left \| right          |
| itemClick             | Item click to select                    | boolean                          |

## License

MIT
