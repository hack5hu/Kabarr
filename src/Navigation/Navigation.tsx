import React, {useEffect, useMemo, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import WebViewScreen from '../Screens/WebViewScreen/WebViewScreen';
import BookmarkScreen from '../Screens/BookmarkScreen/BookmarkScreen';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    <Stack.Screen name="BookmarkScreen" component={BookmarkScreen} />
  </Stack.Navigator>
);

const RootNavigation = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const InitialScreen = useMemo(
    () => (isLoading ? SplashScreen : MainStack),
    [isLoading],
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Initial" component={InitialScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
