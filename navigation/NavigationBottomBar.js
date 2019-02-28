import React from 'react'
import { BottomTabBar } from 'react-navigation'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { primary, secondary, tertiary } = state.themeState.theme
  const themeTab = {
    ...ownProps,
    activeTintColor: tertiary,
    showLabel: false,
    labelStyle: {
      fontSize: 24
    },
    tabStyle: {
      padding: 10
    },
    style: {
      backgroundColor: primary,
      color: secondary
    }
  }
  // const themedHeader = {
  //   ...ownProps,
  //   scene: {
  //     ...ownProps.scene,
  //     descriptor: {
  //       ...ownProps.scene.descriptor,
  //       options: {
  //         ...ownProps.scene.descriptor.options,
  //         headerStyle: {
  //           backgroundColor: state.themeState.theme.primary,
  //           borderBottomColor: state.themeState.theme.secondary
  //         },
  //         headerTitleStyle: {
  //           color: state.themeState.theme.secondary,
  //           fontWeight: 'bold',
  //           zIndex: 1,
  //           fontSize: 18,
  //           lineHeight: 23
  //         },
  //         headerTintColor: state.themeState.theme.secondary
  //       }
  //     }
  //   }
  // }

  return themeTab
}

export default connect(mapStateToProps)(BottomTabBar)
