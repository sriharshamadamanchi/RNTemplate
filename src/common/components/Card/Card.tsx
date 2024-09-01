import * as React from 'react';
import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { theme } from '../../theme';
import { Card as PaperCard } from 'react-native-paper';

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: theme.colors.onPrimary,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginVertical: moderateScale(8)
  }
});

interface cardType {
  onPress?: () => void,
  onLongPress?: () => void,
  children: React.ReactElement,
  contentStyle?: any,
  style?: any,
  disabled?: boolean,
  testID?: string
};

export const Card = ({ children, disabled, onPress, onLongPress, style, contentStyle, testID }: cardType) => {

  return (
    <PaperCard
      disabled={disabled}
      onPress={onPress}
      onLongPress={onLongPress}
      elevation={2}
      testID={testID}
      contentStyle={contentStyle}
      style={[styles.cardStyle, style]}>

      {children}

    </PaperCard>
  )
};
