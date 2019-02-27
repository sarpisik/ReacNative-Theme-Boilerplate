import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { mapStateToProps } from './HOCs/withTheme'
import { styles } from '../themes'

const ScreenContainer = ({ theme, children }) => {
  const barStyle = theme.primary === '#fff' ? 'dark-content' : 'light-content'
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.primary }]}>
      <StatusBar barStyle={barStyle} backgroundColor={theme.primary} />
      {children}
    </SafeAreaView>
  )
}

export default connect(mapStateToProps)(ScreenContainer)
