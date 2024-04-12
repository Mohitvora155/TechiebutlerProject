import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';
import images from '../../constants/images';

const FavoriteScreen = () => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'Favorites'}</Text>
      </View>
     
    </View>
  );
};
export default FavoriteScreen;
