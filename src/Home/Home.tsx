import React from "react";
import { StyleSheet, View } from "react-native";
import { UI } from "./UI";
// @ts-ignore
import { PrimaryView } from "../common/components/PrimaryView/PrimaryView";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const HomeTab = () => {

  return (
    <PrimaryView>
      <View style={styles.container}>
        <UI />
      </View>
    </PrimaryView>
  )
}