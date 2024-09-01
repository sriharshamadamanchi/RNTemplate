import React from "react";
import { StyleSheet, View } from "react-native";
import { UI } from "./UI";
// @ts-ignore
import { PrimaryView } from "../common/components/PrimaryView/PrimaryView";
import colors from "../common/theme/colors.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background
  }
})

export const HomeTab = () => {

  return (
    <>
      <View style={styles.container}>
        <UI />
      </View>
    </>
  )
}