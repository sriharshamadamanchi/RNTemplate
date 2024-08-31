import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from "./common/theme";
import { moderateScale } from "react-native-size-matters";
import { Label } from "./common/components";
import { HomeTab } from "./Home/Home";

const Stack = createStackNavigator();

export const Home = () => {
  const initialRouteName = "HomeTab"
  return (
    <Stack.Navigator key={initialRouteName} initialRouteName={initialRouteName}
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.background.primary,
          height: Platform.OS === 'android' ? moderateScale(50) : 0
        },
        headerTitleStyle: {
          fontSize: theme.fontSizes.xl20,
          color: theme.colors.font.primary,
          fontFamily: theme.fonts.bold,
          marginHorizontal: moderateScale(20),
        },
        headerTitle: ({ children }: { children: string }) => {
          return (
            <Label primary bold xl20 title={children} ellipsizeMode={"tail"} numberOfLines={1} style={{ marginHorizontal: moderateScale(25) }} />
          );
        },
      }}
    >
      <Stack.Screen
        options={(): any => {
          return {
            title: "Home"
          };
        }}
        name="HomeTab" component={HomeTab} />
    </Stack.Navigator>
  )
}