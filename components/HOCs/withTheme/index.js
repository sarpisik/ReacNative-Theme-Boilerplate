import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import { connect } from 'react-redux'
import * as ACTIONS from '../../../constants'
import ScreenContainer from '../../ScreenContainer'
import { styles } from '../../../themes'

export const mapStateToProps = state => ({
  theme: state.themeState.theme
})

export const mapDispatchToProps = dispatch => ({
  changeTheme: theme =>
    dispatch({
      type: ACTIONS.CHANGE_THEME,
      theme
    })
})

export const WithTheme = WrappedComponent => {
  class hocComponent extends PureComponent {
    static propTypes = {
      theme: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string
      }).isRequired
    }

    constructor(props) {
      super(props)

      this.prevTheme = this.props.theme
      this.animatedValue = new Animated.Value(0)
    }

    componentWillReceiveProps = nextProps => {
      if (nextProps.theme !== this.props.theme) {
        this.prevTheme = this.props.theme
        this.animateBackgroundColor()
      }
    }

    animateBackgroundColor = () => {
      this.animatedValue.setValue(0)
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 500
        // useNativeDriver: true
      }).start()
    }

    triggerAnimate = theme => {
      this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [this.prevTheme.primary, this.props.theme.primary]
      })
    }

    render() {
      // const mergedArr = {
      //   primary: {
      //     prev: prevTheme.primary,
      //     next: this.props.theme.primary
      //   },
      //   secondary: {
      //     prev: prevTheme.secondary,
      //     next: this.props.theme.secondary
      //   },
      //   tertiary: {
      //     prev: prevTheme.tertiary,
      //     next: this.props.theme.tertiary
      //   }
      // }
      const colors = {
        primary: () =>
          this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.prevTheme.primary, this.props.theme.primary]
          }),
        secondary: () =>
          this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.prevTheme.secondary, this.props.theme.secondary]
          }),
        tertiary: () =>
          this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.prevTheme.tertiary, this.props.theme.tertiary]
          })
      }
      // const primary = this.animatedValue.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [this.prevTheme.primary, this.props.theme.primary]
      // })
      // const secondary = this.animatedValue.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [this.prevTheme.secondary, this.props.theme.secondary]
      // })
      // const tertiary = this.animatedValue.interpolate({
      //   inputRange: [0, 1],
      //   outputRange: [this.prevTheme.tertiary, this.props.theme.tertiary]
      // })

      console.log('this.prevTheme ,', this.prevTheme)
      console.log('this.props.theme ,', this.props.theme)

      return <WrappedComponent {...this.props} colors={colors} />
    }
  }
  return hocComponent
}

export default WrapperComponent =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithTheme(WrapperComponent))
