import React from "react";
import { StyleSheet, View } from "react-native";
import { UI } from "./UI";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const HomeTab = () => {

  return (
    <View style={styles.container}>
      <UI />
    </View>
  )

}