import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { AvatarLabel, Label, LoadingIndicator, AvatarIcon } from "../common/components";
import { moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    component: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: moderateScale(50),
        paddingHorizontal: moderateScale(50)
    },
    loader: {
        height: moderateScale(50),
        right: moderateScale(20)
    }

})

const Loader = () => {
    return (
        <View style={styles.component}>
            <Label semibold title="Loader" />
            <View style={styles.loader}>
                <LoadingIndicator loading={true} />
            </View>
        </View>
    )
}

const AIcon = () => {
    return (
        <View style={[styles.component]}>
            <Label semibold title="Avatar Icon" />
            <AvatarIcon icon="chat" size={moderateScale(40)} />
        </View>
    )
}

const ALabel = () => {
    return (
        <View style={[styles.component]}>
            <Label semibold title="Avatar Text" />
            <AvatarLabel label="MS" size={moderateScale(40)} />
        </View>
    )
}

export const UI = () => {

    return (
        <ScrollView style={styles.container}>
            <UI.Loader />
            <UI.AvatarIcon />
            <UI.AvatarText />
        </ScrollView>
    )

}

UI.Loader = Loader
UI.AvatarIcon = AIcon
UI.AvatarText = ALabel