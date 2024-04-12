import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'More'}</Text>
      </View>
    </View>
  );
};
export default MoreScreen;
