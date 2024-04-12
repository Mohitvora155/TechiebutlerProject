import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'Search Item'}</Text>
      </View>
    </View>
  );
};
export default SearchScreen;
