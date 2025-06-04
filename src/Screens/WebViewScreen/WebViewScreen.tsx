import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/Ionicons';
import {useWebViewScreen} from './useWebViewScreen';
import { styles } from './Styles';
const WebViewScreen = () => {
  const {url, goBack} = useWebViewScreen();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            Kabar
          </Text>
        </View>
        <TouchableOpacity onPress={goBack} style={styles.closeButton}>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <WebView source={{uri: url}} style={styles.webview} />
    </View>
  );
};

export default WebViewScreen;

