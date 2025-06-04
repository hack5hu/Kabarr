import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {styles} from './Styles';
const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/kabar.png')} 
          style={{
            alignSelf: 'center',
            width: 217,
            height: 66,
          }}
        />

      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;


