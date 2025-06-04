import React, {useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {getTimeAgo} from '../../Helper/helper';
import {NewsData} from '../../Constants/Type';
import {styles} from './Style';

const HeadlineNews = ({data, onPressFn, bookmarkFn, bookmark}: NewsData) => {
  const {title, urlToImage, publishedAt, source, url, description} = data || {};
  const timeAgo = useMemo(() => getTimeAgo(publishedAt), [publishedAt]);
  const isBookmarked = useMemo(
    () => bookmark?.some(b => b?.url === url),
    [bookmark, url],
  );
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressFn(url, title)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: urlToImage}} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.descriptionContainer}>
          <View style={styles.titleAndDescription}>
            <Text numberOfLines={1} style={styles.title} ellipsizeMode="tail">
              {title}
            </Text>
            <Text
              numberOfLines={2}
              style={styles.description}
              ellipsizeMode="tail">
              {description}
            </Text>
          </View>

          <Icon
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={30}
            onPress={() => {
              if (bookmarkFn) {
                bookmarkFn(data);
              }
            }}
            color={'#343434'}
            style={{marginBottom: 35, marginLeft: 15}}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.sourceInfo}>
            <Text style={styles.source}>{source?.name}</Text>
            <Icon name="clock-time-three-outline" size={13} color={'#4E4B66'} />
            <Text style={styles.time}>{timeAgo}</Text>
          </View>
          <Icon name="dots-horizontal" size={13} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HeadlineNews;
