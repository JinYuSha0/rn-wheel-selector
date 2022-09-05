import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { WheelPickerView } from 'rn-wheel-selector';

const data = Array.from({ length: 100 }).map((_, index) => ({
  label: `${index + 1}`,
  value: `${index + 1}`,
}));

export default function App() {
  return (
    <View style={styles.container}>
      <WheelPickerView
        itemClick
        data={data}
        style={styles.box}
        selectedItemTextColor={'red'}
        visibleItemCount={20}
        onValueChange={console.log}
        value={'50'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#CCC',
  },
  box: {
    width: '100%',
    height: '100%',
  },
});
