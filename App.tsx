import React from 'react';
import {LogBox, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import {store, persister} from './src/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <NavigationContainer>
            <StatusBar
              backgroundColor="#fff"
              barStyle="dark-content"
              animated={true}
            />
            <SafeAreaView style={styles.sectionContainer}>
              <RootNavigation />
            </SafeAreaView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
