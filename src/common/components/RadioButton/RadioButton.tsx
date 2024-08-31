import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE } from "../../constants";
import { theme } from "../../theme";
// @ts-ignore
import Checkbox from "react-native-modest-checkbox";
import { moderateScale } from 'react-native-size-matters';
import { Ripple } from '../Ripple/Ripple';

interface radioButtonType {
    status: boolean,
    label: string,
    onChange: () => void,
    componentName?: string,
    disabled?: boolean,
    containerStyle?: any,
    textStyle?: any,
    testID?: string,
    accessibilityLabel?: string,
    value?: string
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    color: theme.colors.font.primary,
    paddingLeft: moderateScale(5),
    fontSize: theme.fontSizes.l,
    fontFamily: theme.fonts.medium
  },
  disabledTextStyle: {
    color: theme.colors.font.secondary
  }
});
export const RadioButton = ({ status, label, onChange, componentName, disabled, testID, accessibilityLabel, containerStyle, textStyle }: radioButtonType): any => {

  return (
    <Ripple
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
      onPress={() => {
        onChange();
      }} style={[styles.containerStyle, containerStyle]}>
      <Checkbox
        noFeedback={true}
        containerStyle={{
          width: moderateScale(20),
          height: moderateScale(20),
        }}
        label={""}
        onChange={() => { }}
        checked={status}
      />
      <Text maxFontSizeMultiplier={ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE} numberOfLines={2} style={[styles.textStyle, disabled === true ? styles.disabledTextStyle : {}, textStyle]}>{label}</Text>
    </Ripple>
  );
};
