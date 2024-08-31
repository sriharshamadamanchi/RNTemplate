import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { AvatarLabel, Label, LoadingIndicator, AvatarIcon, Banner } from "../common/components";
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

const ABanner = () => {
    return (
        <Banner
            visible={true}
            actions={[
                {
                    label: "Cancel",
                }
            ]}
            renderBanner={() => {
                return (
                    <Label title="This is a custom banner from react native paper" />
                )
            }}
        />
    )
}

export const UI = () => {

    return (
        <ScrollView style={styles.container}>
            <UI.Loader />
            <UI.AvatarIcon />
            <UI.AvatarText />
            <UI.Banner />
        </ScrollView>
    )

}

UI.Loader = Loader
UI.AvatarIcon = AIcon
UI.AvatarText = ALabel
UI.Banner = ABanner