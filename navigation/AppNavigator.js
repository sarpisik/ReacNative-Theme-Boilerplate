import React from 'react'
import { Animated, Easing } from 'react-native'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'
import createAnimatedTabNavigator from './createAnimatedBottomTabNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Bar from './NavigationHeader'
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      })

      return { transform: [{ translateX }] }
    }
  }
}

const icons = {
  Home: 'ios-home',
  Settings: 'ios-settings'
}

const IconComponent = Ionicons

const TabNavigator = createAnimatedTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    initialRouteName: 'Home',
    // animationEnabled: true,
    tabBarComponent: props => <Bar {...props} />,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state
        let iconName = icons[routeName]

        return <IconComponent name={iconName} size={25} color={tintColor} />
      }
    })
  }
)

export default createAppContainer(
  createStackNavigator(
    {
      Main: TabNavigator
      // Friends: { screen: Friends }
    },
    {
      initialRouteName: 'Main',
      defaultNavigationOptions: () => ({
        header: null
      })
      // transitionConfig
    }
  )
)
