import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export const HomeTab = () => {
    const alpha = useSharedValue(0);

    React.useEffect(() => {
        alpha.value = withRepeat(withTiming(
            Dimensions.get('window').height - 100,
            {
                duration: 1000
            }
        ), -1, true)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Animated.View
                style={{
                    top: alpha,
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    elevation: 5,
                    backgroundColor: 'red',
                }}
            />
        </View>
    )

}