import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import HomeItem from './HomeItem';

const da = [
  {title: 'React Native', description: 'JS Framework'},
  {title: 'React Native', description: 'JS Framework'},
];

class Home extends Component {
  renderItem = ({item}) => <HomeItem item={item} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={da}
          renderItem={this.renderItem}
          keyExtractor={(index, _) => index + ''}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});

export default Home;
