import React from "react";
import { StyleSheet, View } from "react-native";
import { Label } from "../common/components";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const HomeTab = () => {

    return (
        <View style={styles.container}>
            <Label xxl primary title="Home" />
        </View>
    )

}