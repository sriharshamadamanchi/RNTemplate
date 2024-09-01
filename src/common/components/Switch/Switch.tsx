import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Switch as PaperSwitch } from 'react-native-paper';

const styles = StyleSheet.create({
  containerStyle: {
    transform: [{ scale: 1.2 }]
  }
});

type SwitchProps = {
  checked?: boolean,
  disabled?: boolean,
  onChange?: (_: boolean) => void,
  containerStyle?: any,
  testID?: string
};

export const Switch = ({ checked, disabled, onChange = () => { }, containerStyle = {}, testID }: SwitchProps) => {

  return (
    <PaperSwitch
      value={checked}
      disabled={disabled}
      onValueChange={() => onChange(!checked)}
      style={[styles.containerStyle, containerStyle]}
      testID={testID}
    />
  );
};
