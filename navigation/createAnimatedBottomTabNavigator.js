import React from 'react'
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native'
import { BottomTabBar, createTabNavigator } from 'react-navigation-tabs'

const { width } = Dimensions.get('window')

class AnimatedTabNavigationView extends React.Component {
  constructor(props) {
    super(props)
    const initialIndex = props.navigation.state.index

    this.state = {
      selectedIndexAnimated: new Animated.Value(initialIndex)
    }
  }

  // Animate from previousy selected index to newly selected index. This is
  // the most simple way to do this, you might want to control each tab visibility
  // individually with their own animated value for example.
  componentDidUpdate(prevProps) {
    if (
      prevProps.navigation.state.index !== this.props.navigation.state.index
    ) {
      Animated.timing(this.state.selectedIndexAnimated, {
        toValue: this.props.navigation.state.index,
        duration: 150,
        useNativeDriver: true
      }).start()
    }
  }

  _renderTabs = () => {
    return this.props.navigation.state.routes.map(this._renderTab)
  }

  _renderTab = (route, index) => {
    const { selectedIndexAnimated } = this.state
    const { index: activeIndex } = this.props.navigation.state

    const containerStyle = {
      // backgroundColor: '#fff',
      // opacity: selectedIndexAnimated.interpolate({
      //   inputRange: [index - 1, index, index + 1],
      //   outputRange: [0, 1, 0]
      // }),
      transform: [
        {
          translateX: selectedIndexAnimated.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, -width]
          })
        }
      ]
    }

    // Opacity is the easiest thing here to animate
    // let opacity = selectedIndexAnimated.interpolate({
    //   inputRange: [index - 1, index, index + 1],
    //   outputRange: [0, 1, 0]
    // })
    // let translateX = selectedIndexAnimated.interpolate({
    //   inputRange: [index - 1, index, index + 1],
    //   outputRange: [width, 1, width]
    // })

    return (
      <Animated.View
        style={[StyleSheet.absoluteFillObject, containerStyle]}
        pointerEvents={index === activeIndex ? 'auto' : 'none'}
        key={route.key}>
        {this.props.renderScene({ route })}
      </Animated.View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>{this._renderTabs()}</View>
        <TabBar {...this.props} />
      </View>
    )
  }
}

// This is copy/pasted directly from _renderTabBar in:
// https://github.com/react-navigation/react-navigation-tabs/blob/master/src/navigators/createBottomTabNavigator.js
class TabBar extends React.Component {
  render() {
    const {
      tabBarComponent: TabBarComponent = BottomTabBar,
      tabBarOptions,
      navigation,
      screenProps,
      getLabelText,
      getAccessibilityLabel,
      getButtonComponent,
      getTestID,
      renderIcon,
      onTabPress
    } = this.props

    const { descriptors } = this.props
    const { state } = this.props.navigation
    const route = state.routes[state.index]
    const descriptor = descriptors[route.key]
    const options = descriptor.options

    if (options.tabBarVisible === false) {
      return null
    }

    return (
      <TabBarComponent
        {...tabBarOptions}
        jumpTo={this._jumpTo}
        navigation={navigation}
        screenProps={screenProps}
        onTabPress={onTabPress}
        getLabelText={getLabelText}
        getButtonComponent={getButtonComponent}
        getAccessibilityLabel={getAccessibilityLabel}
        getTestID={getTestID}
        renderIcon={renderIcon}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  }
})

export default createTabNavigator(AnimatedTabNavigationView)
