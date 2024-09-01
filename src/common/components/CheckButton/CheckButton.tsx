import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Checkbox as PaperCheckbox, useTheme } from 'react-native-paper';
import { moderateScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  containerStyle: {
    transform: [{ scale: 1.2 }]
  }
});

interface checkButtonType {
  checked?: boolean,
  disabled?: boolean,
  onPress?: () => void,
  containerStyle?: any,
  testID?: string
};

export const CheckButton = ({ disabled, checked, onPress = () => { }, containerStyle = {}, testID }: checkButtonType) => {

  const mTheme = useTheme()

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <PaperCheckbox
        status={checked ? 'checked' : 'unchecked'}
        disabled={disabled}
        onPress={onPress}
        uncheckedColor={mTheme.colors.primary}
        testID={testID}
      />
    </View>
  );
};
