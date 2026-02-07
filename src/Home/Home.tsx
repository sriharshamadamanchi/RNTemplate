import React from "react";
import { StyleSheet, View } from "react-native";
import { UI } from "./UI";
import colors from "../common/theme/colors.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background
  }
})

export const HomeTab = () => {

  return (
    <View style = {styles.container}>
      <UI />
    </View>
  )
}
