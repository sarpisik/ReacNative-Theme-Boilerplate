import React from 'react'
import { Animated, View } from 'react-native'
import { styles } from '../themes'

export default ({ colors, children, ...props }) => {
  return colors ? (
    <Animated.View
      style={[
        props.style || styles.container,
        { backgroundColor: colors(), ...props }
      ]}>
      {children}
    </Animated.View>
  ) : (
    <View style={[styles.container, { ...props }]}>{children}</View>
  )
}
