import React from 'react'
import { View, Text } from 'react-native'
import { withHeader, withTheme } from '../components'
import { ScreenContainer } from '../components'

class SettingsScreen extends React.PureComponent {
  render() {
    const { colors } = this.props
    return (
      <ScreenContainer colors={colors.secondary}>
        <Text>SETTINGS</Text>
      </ScreenContainer>
    )
  }
}

const HeaderSettingsScreen = withHeader({ title: 'Settings' })(SettingsScreen)
export default withTheme(HeaderSettingsScreen)
