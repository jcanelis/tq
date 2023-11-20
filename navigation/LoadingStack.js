import React from "react"

// React Navigation
// https://reactnavigation.org/docs/native-stack-navigator
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()

// Expo
import { StatusBar } from "expo-status-bar"

// Screens
import LoadingScreen from "../views/other/LoadingScreen"
import ProfileScreen from "../views/modals/ProfileScreen"
import SoundCheckScreen from "../views/modals/SoundCheckScreen"

// Components
import CustomNavigationBar from "../components/CustomNavigationBar"
import DetailNavigationBar from "../components/DetailNavigationBar"
import ToolbarAudioSearch from "../components/ToolbarAudioSearch"
import ToolbarProfile from "../components/ToolbarProfile"

const LoadingStack = ({ theme }) => {
  return (
    <>
      <StatusBar style={"light"} />
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="TrackQueen" component={LoadingScreen} />
          <Stack.Screen
            name="Your recent tracks"
            component={ProfileScreen}
            options={{
              header: (props) => <DetailNavigationBar {...props} />,
            }}
          />

          <Stack.Screen
            name="Search nearby audio"
            component={SoundCheckScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default LoadingStack
