import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import Swiper from 'react-native-web-swiper'
import DefaultScreen from '../DefaultScreen'
import banner1 from './banner1.png'
import banner2 from './banner2.png'
import banner3 from './banner3.png'

// const Drawer = createDrawerNavigator()

const Home = props => {
  return (
    <DefaultScreen>
      <View style={styles.sliderContainer}>
        <Swiper
          from={0}
          minDistanceForAction={0.1}
          loop
          timeout={5}
          containerStyle={{ height: 300 }}
          controlsProps={{
            dotsTouchable: true,
            // 앞뒤 이동 버튼 숨기기
            nextTitle: '',
            prevTitle: ''
          }}
        >
          <View style={styles.banner}>
            <Image source={banner1} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
          </View>
          <View style={styles.banner}>
            <Image source={banner2} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
          </View>
          <View style={styles.banner}>
            <Image source={banner3} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
          </View>
        </Swiper>
      </View>
    </DefaultScreen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 20
  },
  banner: {
    flex: 1, alignItems: 'center', justifyContent: 'center'
  }
//   slideBox: {
//     maxWidth: 680,
//     width: '90%',
//     height: '100%'
//   },
//   scrollView: {
//     width: 680,
//     height: 300
//   }
})

// const ImageSlide = ({ images, height = 200, width = 400 }) => {
//   const [index, setIndex] = useState({ cur: 0, max: 0 })
//   useEffect(() => {
//     setIndex({ cur: 0, max: images?.length ? images?.length - 1 : 0 })
//   }, [images])

//   useEffect(() => {
//     console.log('setTimeout')
//     return setTimeout(() => {
//       setIndex(prev => {
//         console.log('prev', prev)
//         const isOver = prev.max < prev.cur + 1
//         return { ...prev, cur: isOver ? 0 : prev.cur + 1 }
//       })
//     }, 3500)
//   }, [index.cur])

//   return (
//     <View style={{ height: '100%', width: '100%' }}>
//       <Image
//         source={images?.[index.cur]}
//         style={{ height: '100%', width: '100%' }}
//         resizeMode="contain"
//       />
//     </View>
//   )
// }

// 라파엘 노인데이커어센터 남구점
export default Home
