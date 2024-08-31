import React from "react";
import { StyleSheet, View } from "react-native";
import { Label, LoadingIndicator } from "../common/components";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Loader = () => {
    return (
        <View style={styles.container}>
            <LoadingIndicator loading={true} />
            <Label title="Loader" style={{ marginTop: moderateScale(60) }} />
        </View>
    )
}

export const UI = () => {

    return (
        <View style={styles.container}>
            <UI.Loader />
        </View>
    )

}

UI.Loader = Loader