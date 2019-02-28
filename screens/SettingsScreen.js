import React from 'react'
import { View, Text } from 'react-native'
import { withHeader, withTheme } from '../components'
import { ScreenContainer } from '../components'
import { styles } from '../themes'

class SettingsScreen extends React.PureComponent {
  render() {
    const { colors } = this.props
    return (
      <>
        <Text style={styles.textCenter}>SETTINGS</Text>
      </>
    )
  }
}

const HeaderSettingsScreen = withHeader({ title: 'Settings' })(SettingsScreen)
export default withTheme(HeaderSettingsScreen)
