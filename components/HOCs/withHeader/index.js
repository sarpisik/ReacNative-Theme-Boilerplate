import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { styles } from '../../../themes'
import { ScreenContainer } from '../../index'

let iconStyle = {
  // color: colors.text,
  size: 25
}

export default ({
  title = '',
  icon = '',
  goBackTo = ''
}) => WrappedComponent => {
  class WithHeader extends PureComponent {
    // goBack = () => {
    //   const { history } = this.props
    //   goBackTo ? history.replace(goBackTo) : history.goBack()
    // }

    horizontalComponent = (name, onPress) => {
      iconStyle.color = this.props.theme.secondary
      return (
        <TouchableOpacity onPress={onPress} style={styles.headerButton}>
          <Icon name={name} {...iconStyle} />
        </TouchableOpacity>
      )
    }

    centerComponent = title => ({
      text: title.toUpperCase(),
      style: {}
    })

    render() {
      const {
        colors,
        theme: { primary, secondary }
      } = this.props
      return (
        <ScreenContainer colors={colors.secondary}>
          <ScreenContainer
            style={styles.headerContainer}
            colors={colors.primary}>
            <Text
              style={[styles.headerText, { color: this.props.theme.tertiary }]}>
              {title.toUpperCase()}
              {icon && this.horizontalComponent('chevron-left', this.goBack)}
            </Text>

            {/* <Header
              containerStyle={[
                styles.headerContainer,
                {
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderBottomColor: 'rgba(0,0,0,0)'
                }
              ]}
              // centerContainerStyle={styles.centerContainer}
              leftComponent={
                icon
                  ? this.horizontalComponent('chevron-left', this.goBack)
                  : null
              }
              centerComponent={this.centerComponent(title)}
            /> */}
          </ScreenContainer>
          <ScreenContainer {...styles.verticalCenter}>
            <WrappedComponent {...this.props} />
          </ScreenContainer>
        </ScreenContainer>
      )
    }
  }
  return WithHeader
}
