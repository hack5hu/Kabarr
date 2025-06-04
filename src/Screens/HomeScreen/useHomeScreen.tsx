import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { dataManagerApiRequest } from '../../DataManager/dataManager';
import {setBookMark, setRemoveBookmark} from '../../Store/Reducers';
import { mainNewsCategories } from '../../MockData/MockData';
import { Article } from '../../Constants/Type';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootState } from '../BookmarkScreen/Type';

type RootStackParamList = {
  WebViewScreen: {url: string; title: string};
  BookmarkScreen: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'WebViewScreen'>;

export const useHomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    mainNewsCategories[0],
  );
  const [data, setData] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const bookmark = useSelector((state: RootState) => state.global.bookmark);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [selectedCategory]);

  const fetchData = async (isLoadMore: boolean = false) => {
    try {
      const response = await dataManagerApiRequest({
        ...(selectedCategory !== 'All' && {category: selectedCategory}),
      });

      if (response?.data?.articles?.length) {
        setData(prev =>
          isLoadMore
            ? [...prev, ...response.data.articles]
            : response.data.articles,
        );
      } else {
        Alert.alert(
          'No Data Found',
          'Check your connection or try another category.',
        );
      }
    } catch (e: any) {
      Alert.alert('Error', e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWebView = (url: string, title: string) => {
    navigation.push('WebViewScreen', {url, title});
  };

  const handleBookmark = (item: Article) => {
    const isBookmarked = bookmark?.some((b: Article) => b.url === item.url);
    if (isBookmarked) {
      dispatch(setRemoveBookmark(item.url));
    } else {
      dispatch(setBookMark(item));
    }
  };

  const goToBookmarkScreen = () => {
    navigation.push('BookmarkScreen');
  };

  return {
    selectedCategory,
    setSelectedCategory,
    data,
    isLoading,
    page,
    bookmark,
    handleWebView,
    handleBookmark,
    goToBookmarkScreen,
    mainNewsCategories,
  };
};
