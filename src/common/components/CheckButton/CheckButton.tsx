import * as React from 'react';
import { StyleSheet } from 'react-native';
// @ts-ignore
import Checkbox from "react-native-modest-checkbox";
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  containerStyle: {
    width: moderateScale(40),
    height: moderateScale(40)
  }
});

interface checkButtonType {
  checked?: boolean,
  events?: string,
  onPress?: () => void,
  height?: number,
  width?: number,
  label?: string,
  labelStyle?: Object,
  style?: any,
  componentName?: string,
  containerStyle?: any,
  testID?: string,
  accessibilityLabel?: string
};

export const CheckButton = ({ label = "", labelStyle = {}, checked, events, onPress = () => { }, height, width, style, componentName, containerStyle, testID, accessibilityLabel }: checkButtonType) => {
  return (
    <Checkbox
      noFeedback={true}
      containerStyle={{ ...styles.containerStyle, ...style, ...containerStyle }}
      label={label}
      labelStyle={labelStyle}
      onChange={() => {
        onPress();
      }}
      checked={checked}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    />
  );
};
