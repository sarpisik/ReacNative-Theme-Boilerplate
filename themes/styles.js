import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerButton: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    paddingRight: 5,
    width: 40
  },
  headerContainer: {
    alignItems: 'center',
    height: '15%',
    maxHeight: 75,
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingTop: 25
    // width: '100%'
  },
  headerText: { fontWeight: 'bold', fontSize: 20 }
})

export default styles
