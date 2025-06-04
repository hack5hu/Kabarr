import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import HeadlineNews from '../../Components/HeadlineNews/HeadlineNews';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Styles';
import {useHomeScreen} from './useHomeScreen';

const HomeScreen: React.FC = () => {
  const {
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
  } = useHomeScreen();

  const LogoHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../Assets/Images/kabar.png')}
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={goToBookmarkScreen}>
        <Icon name={'bookmark'} size={30} color={'#343434'} />
      </TouchableOpacity>
    </View>
  );

  const ViceHeader = ({title, subTitle}: {title: string; subTitle: string}) => (
    <View style={styles.headerRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAll}>{subTitle}</Text>
    </View>
  );

  const CategoryItem = ({title}: {title: string}) => (
    <TouchableOpacity onPress={() => setSelectedCategory(title)}>
      <View
        style={[
          styles.item,
          selectedCategory === title && styles.selectedItem,
        ]}>
        <Text
          style={[
            styles.title,
            selectedCategory === title && styles.selectedTitle,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const NewListRender = () => (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <HeadlineNews
          data={item}
          onPressFn={handleWebView}
          bookmarkFn={handleBookmark}
          bookmark={bookmark}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.newsList}
      showsVerticalScrollIndicator={false}
    />
  );
  const CategoryListRender = () => (
    <FlatList
      data={mainNewsCategories}
      renderItem={({item}) => <CategoryItem title={item} />}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryList}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <LogoHeader />
        <ViceHeader title={'Latest'} subTitle={''} />
        <CategoryListRender />
        {isLoading && page === 1 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#1877F2" />
          </View>
        ) : (
          <>
            <NewListRender />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
