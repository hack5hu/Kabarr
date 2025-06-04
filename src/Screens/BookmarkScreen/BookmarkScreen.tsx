import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeadlineNews from '../../Components/HeadlineNews/HeadlineNews';
import {styles} from './Styles';
import {useBookmarkScreen} from './useBookmark';

const BookmarkScreen = () => {
  const {bookmarkData, handleWebView, handleBookmark, goBack} =
    useBookmarkScreen();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
            <Icon name={'arrow-left-thin'} size={30} color={'#343434'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>BookMark</Text>
        </View>

        {bookmarkData.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              You haven't bookmarked any news
            </Text>
          </View>
        ) : (
          <FlatList
            data={bookmarkData}
            renderItem={({item}) => (
              <HeadlineNews
                data={item}
                onPressFn={handleWebView}
                bookmarkFn={handleBookmark}
                bookmark={bookmarkData}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.newsList}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BookmarkScreen;
