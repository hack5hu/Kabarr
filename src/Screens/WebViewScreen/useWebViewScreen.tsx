import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  WebViewScreen: {url: string; title: string};
};

type WebViewScreenRouteProp = RouteProp<RootStackParamList, 'WebViewScreen'>;
type WebViewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WebViewScreen'
>;

export const useWebViewScreen = () => {
  const route = useRoute<WebViewScreenRouteProp>();
  const navigation = useNavigation<WebViewScreenNavigationProp>();

  const {url} = route.params || {};

  return {
    url,
    goBack: navigation.goBack,
  };
};
