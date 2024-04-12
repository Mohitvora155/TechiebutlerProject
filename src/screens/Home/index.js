import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [details, setDetails] = useState();

  const ItemDetail = ({postId, fetchData}) => {
    useEffect(() => {
      fetchData(postId);
    }, [fetchData, postId]);

    return (
      <View style={styles.detailContainer}>
        <Text
          style={{
            color: colors.redWhite,
          }}>{`Details for post ${postId}:`}</Text>
      </View>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const heavyComputation = useCallback(item => {
    const computedDetails = `Computed details for post ${item.id}`;
    setDetails(computedDetails);
  }, []);

  const renderItem = ({item}) => {
    heavyComputation(item);
    // const computedDetails = useMemo(
    //   () => heavyComputation(item),
    //   [heavyComputation, item],
    // );
    return (
      <TouchableOpacity
        onPress={() => setSelectedPost(item.id)}
        style={styles.dataContainer}>
        <View style={{padding: 10}}>
          <Text
            style={{color: colors.black}}>{`${item.id}: ${item.title}`}</Text>
          <Text style={{color: colors.graylight}}>{details}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const fetchPostDetails = useCallback(async postId => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const jsonData = await response.json();
      // Handle fetched data for selected post
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{'Home'}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {selectedPost && (
        <ItemDetail postId={selectedPost} fetchData={fetchPostDetails} />
      )}
    </View>
  );
};
export default HomeScreen;
