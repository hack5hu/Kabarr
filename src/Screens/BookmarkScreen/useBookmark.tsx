import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Article} from '../../Constants/Type';
import {setRemoveBookmark} from '../../Store/Reducers';
import {RootState, AppDispatch} from './Type';

type RootStackParamList = {
  WebViewScreen: {url: string; title: string};
};
type WebViewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WebViewScreen'
>;

export const useBookmarkScreen = () => {
  const navigation = useNavigation<WebViewScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const bookmark = useSelector((state: RootState) => state.global.bookmark);

  const bookmarkData = useMemo(() => bookmark || [], [bookmark]);

  const handleWebView = useCallback(
    (url: string, title: string) => {
      navigation.navigate('WebViewScreen', {url, title});
    },
    [navigation],
  );

  const handleBookmark = useCallback(
    (item: Article) => {
      const isBookmarked = bookmark?.some((b: Article) => b.url === item.url);
      if (isBookmarked) {
        dispatch(setRemoveBookmark(item.url));
      }
    },
    [bookmark, dispatch],
  );
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    bookmarkData,
    handleWebView,
    handleBookmark,
    goBack,
  };
};
