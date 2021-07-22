import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import banner1 from './banner1.png';
// import banner2 from './banner2.png';
// import banner3 from './banner3.png';
// import FastImage from 'react-native-fast-image';
import {SliderBox as SilderBoxDefault} from './packages';

// const SliderBox = (props) => {
//     // const images = useState([banner1,banner2,banner3])
//     const images = useState(['https://source.unsplash.com/1024x768/?nature'])
//     return (
//         // <View style={styles.container}>
//         <SliderBox
//             images={images}
//             // images={[banner1,banner2,banner3]}
//             // sliderBoxHeight={400}
//             onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
//         />
//         // </View>
//     )
// }

const TestSliderBox = props => {
  // const [images, setImages] = useState([
  //     'https://images.unsplash.com/photo-1496595351388-d74ec2c9c9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80',
  //     'https://images.unsplash.com/photo-1500731753043-cbb4269ca2ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80',
  //     'https://images.unsplash.com/photo-1522262139463-236991a708cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80',
  //     'https://images.unsplash.com/photo-1446059004666-8148312ba98b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  //     'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1431&q=80',
  // ])
  const images = useMemo(
    () => [
      'https://images.unsplash.com/photo-1496595351388-d74ec2c9c9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80',
      'https://images.unsplash.com/photo-1500731753043-cbb4269ca2ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80',
      'https://images.unsplash.com/photo-1522262139463-236991a708cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80',
      'https://images.unsplash.com/photo-1446059004666-8148312ba98b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1431&q=80',
    ],
    [],
  );
  console.log('images', images);
  return (
    <SilderBoxDefault
      //   ImageComponent={FastImage}
      images={images}
      //   images={images || ['https://images.unsplash.com/photo-1496595351388-d74ec2c9c9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80']}
      // images={[
      //     'https://images.unsplash.com/photo-1496595351388-d74ec2c9c9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80',
      //     'https://images.unsplash.com/photo-1500731753043-cbb4269ca2ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80',
      //     'https://images.unsplash.com/photo-1522262139463-236991a708cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1406&q=80',
      //     'https://images.unsplash.com/photo-1446059004666-8148312ba98b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      //     'https://images.unsplash.com/photo-1540544660406-6a69dacb2804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1431&q=80',
      // ]}
      sliderBoxHeight={200}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      //currentImageEmitter={index => console.warn(`image ${index} pressed`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      paginationBoxStyle={{
        position: 'absolute',
        bottom: 0,
        padding: 0,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(128, 128, 128, 0.92)',
      }}
      autoplay
      circleLoop
      ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
      imageLoadingColor="#2196F3"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestSliderBox;
