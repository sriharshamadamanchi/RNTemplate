// @flow Copyright © 2019 Rently Softwares, All Rights Reserved
import * as React from 'react';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { ValidationErrorMessage } from '../ValidationErrorMessage/ValidationErrorMessage';
import { theme } from '../../theme';
import { ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE } from '../../constants';
import Utility from '../../Utility';

const styles = StyleSheet.create({
  viewStyle:{
    // flex:1
  },
  labelStyle:{
    marginBottom:moderateScale(10),
    fontSize: theme.font.fontSizes.l,
    color: theme.colors.secondary,
    fontFamily: theme.font.fontFamily.medium
  },
  textInputStyle: {
    backgroundColor: theme.colors.background,
    borderRadius: moderateScale(10),
    height:moderateScale(50),
    paddingHorizontal: moderateScale(10),
    fontSize:theme.font.fontSizes.l,
    fontFamily: theme.font.fontFamily.medium,
    borderWidth:1,
    borderColor:theme.colors.primary,
  },
  opacityStyle: {
    opacity:0.5
  }
});

type fTextInputWithLabelType = {
  viewStyle?: any,
  textInputStyle?: any,
  labelStyle?: any,
  validationViewStyle?: any,
  validationLabelStyle?: any,
  label?: string,
  value?: string,
  error?: string,
  validate?: ()=>string,
  placeholder?: string,
  onChangeText?: ()=>void,
  onSubmitEditing?: ()=>void,
  onBlur?: ()=>void,
  placeholderTextColor?: string,
  secureTextEntry?: boolean,
  keyboardType?: KeyboardTypeOptions | undefined,
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
  maxLength?: number,
  editable?: boolean,
  autoCorrect?: boolean,
  testID?: string,
  accessibilityLabel?: string,
  multiline?: boolean,
  blurOnSubmit?: boolean,
  showBeginningText?: boolean,
  extendOnContentSizeChange?: boolean,
  reference?: any,
  textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined,
  onFocus?: ()=>void
};

export const FTextInputWithLabel: any = React.memo<fTextInputWithLabelType>((props: fTextInputWithLabelType): React.ReactNode => {
  const [updateHeight, setUpdateHeight ] = React.useState(0);

  return (
    <View style = {[styles.viewStyle, props.viewStyle]}>
      {
        props.label
          ?
          <Text maxFontSizeMultiplier = {ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE}  style = {{ ...styles.labelStyle, ...props.labelStyle }}>
            {props.label}
          </Text>
          :
          null
      }
      <TextInput maxFontSizeMultiplier = {ACCESSIBILITY_MAXIMUM_FONT_SIZE_SCALE}
        ref = {props.reference}
        editable = {props.editable}
        maxLength = {props.maxLength}
        style = {[styles.textInputStyle, props.textInputStyle, props.extendOnContentSizeChange ? { height: moderateScale(Math.max(50, updateHeight)) } : {}, props.editable === false ? styles.opacityStyle : {}]}
        placeholder = {props.placeholder}
        placeholderTextColor = {props.placeholderTextColor ?? theme.colors.secondary}
        onChangeText = {props.onChangeText}
        onSubmitEditing = {props.onSubmitEditing}
        onBlur = {props.onBlur}
        value = {props.value}
        blurOnSubmit = {props.blurOnSubmit}
        secureTextEntry = {props.secureTextEntry}
        selectionColor = {theme.colors.secondary}
        keyboardType = {props.keyboardType}
        autoCapitalize = {props.autoCapitalize}
        autoCorrect = {props.autoCorrect ?? false}
        testID = {props.testID}
        accessibilityLabel = {props.accessibilityLabel}
        multiline = {props.multiline ?? false}
        onContentSizeChange = {props.extendOnContentSizeChange ? (e: any) => {
          setUpdateHeight(e.nativeEvent.contentSize.height);
        } : undefined
        }
        selection = {props.showBeginningText ? { start:0, end:0 } : undefined}
        textAlignVertical = {props.textAlignVertical ?? "auto"}
        onFocus = {props.onFocus}
      />
      {Utility.isNotEmpty(props.error) && (
        <ValidationErrorMessage
          validationViewStyle = {props.validationViewStyle}
          validationLabelStyle = {props.validationLabelStyle}
          error = {props.error} />
      )}
    </View>
  );
});
