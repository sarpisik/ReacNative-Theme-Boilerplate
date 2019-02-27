import React from 'react'
import { Animated, View } from 'react-native'
import { styles } from '../themes'

export default ({ colors, children, ...props }) => {
  console.log('COLOR ,', colors)
  return (
    <Animated.View
      style={[
        props.style || styles.container,
        { backgroundColor: colors(), ...props }
      ]}>
      {children}
    </Animated.View>
  )
}
