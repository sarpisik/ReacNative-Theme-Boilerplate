import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { styles } from '../themes'
import { withHeader, withTheme } from '../components'

class HomeScreen extends React.Component {
  changeHandler = type => this.props.changeTheme(type)

  render() {
    const { colors } = this.props
    return (
      <View style={styles.container}>
        <Button
          containerStyle={{ margin: 10 }}
          title="Light"
          onPress={() => this.props.changeTheme('light')}
        />
        <Button
          containerStyle={{ margin: 10 }}
          title="Navy"
          onPress={() => this.props.changeTheme('navy')}
        />
        <Button
          containerStyle={{ margin: 10 }}
          title="Dark"
          onPress={() => this.props.changeTheme('dark')}
        />
      </View>
    )
  }
}

const HeaderHomeScreen = withHeader({ title: 'Home' })(HomeScreen)

export default withTheme(HeaderHomeScreen)
