import React from 'react';
import { Text, View} from 'react-native';
import styles from './styles';

const RequestsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'Requests'}</Text>
      </View>
    </View>
  );
};
export default RequestsScreen;
