import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'
import { globalStyles } from './constants/Styles'

const DefaultScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={[{ width: useWindowDimensions().width }, globalStyles.screenSize]}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default DefaultScreen
