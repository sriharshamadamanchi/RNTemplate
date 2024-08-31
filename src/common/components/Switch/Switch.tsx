import React from 'react';
import { Switch as PaperSwitch } from 'react-native-paper';
import { theme } from '../../theme';

interface switchType {
    style?: any,
    onChange: (val: boolean) => void,
    isChecked: boolean,
    componentName?: string,
    testID?: string,
    accessibilityLabel?: string,
    disabled?: boolean
};
export const Switch = ({ style, onChange, isChecked, componentName, testID, accessibilityLabel, disabled = false }: switchType): any => {

  return (
    <PaperSwitch
      disabled={disabled}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      value={isChecked}
      color={theme.colors.background.base}
      onValueChange={() => onChange(!isChecked)
      } />
  );
};
