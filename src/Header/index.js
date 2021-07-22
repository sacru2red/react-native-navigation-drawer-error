import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions'
import bg from './bg_icon.png'
import bgp from './bg_icon_p.png'
import { globalStyles, HEADER_HEIGHT } from '../constants/Styles'

// const Header = ({title, header}) => {
//  console.log('title, header', title, header);
const Header = ({ allowFontScaling, style, children, ...rest }) => {
  console.log(
    'allowFontScaling, style, children, rest',
    allowFontScaling,
    style,
    children,
    rest
  )
  const dispatch = useDispatch()
  const accountInfo = useSelector(store => store.accountInfo)

  console.log('accountInfo', accountInfo)
  return (
    <View style={styles.container}>
      <View style={[globalStyles.screenSize, { width: useWindowDimensions().width }, styles.buttonContainer]}>
        <LeftButton onPress={() => dispatch(login({ name: 'name' }))} />
        <Text>{accountInfo.name}</Text>
        <RightButton onPress={() => dispatch(login({ name: 'name' }))} />
      </View>
    </View>
  )
}

const LeftButton = ({ onPress }) => {
  return (
    <View style={styles.leftButtonBox}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={bg}
          style={styles.leftButtonImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  )
}

const RightButton = ({ onPress }) => {
  return (
    <View style={styles.rightButtonBox}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={bgp}
          style={styles.rightButtonImage}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#6a99f3',
    minHeight: HEADER_HEIGHT
  },
  leftButtonBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftButtonImage: {
    width: 13,
    height: 15
  },
  rightButtonImage: {
    width: 21,
    height: 20
  },
  rightButtonBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6a99f3',
    height: 50
  }
})

export default Header
