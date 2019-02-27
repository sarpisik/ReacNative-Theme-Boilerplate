import React from 'react'
import {
  Animated,
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { WebBrowser } from 'expo'

import { MonoText } from '../components/StyledText'
import { withHeader, withTheme } from '../components'
import { ScreenContainer } from '../components'

class HomeScreen extends React.Component {
  changeHandler = type => this.props.changeTheme(type)

  render() {
    const { colors } = this.props
    return (
      <ScreenContainer colors={colors.secondary}>
        <Button title="Light" onPress={() => this.props.changeTheme('light')} />
        <Button title="Light" onPress={() => this.props.changeTheme('navy')} />
        <Button title="Dark" onPress={() => this.props.changeTheme('dark')} />
      </ScreenContainer>
    )
  }
}

const HeaderHomeScreen = withHeader({ title: 'Home' })(HomeScreen)
export default withTheme(HeaderHomeScreen)
