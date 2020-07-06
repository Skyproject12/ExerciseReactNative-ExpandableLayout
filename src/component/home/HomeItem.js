import React, {Component} from 'react';
import {image} from '../../assets';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

class HomeItem extends Component {
  state = {
    isSelected: false,
  };

  onPress = () => {
    this.setState((prevState, prevProv) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  renderDetails = (textHasil) => (
    <View>
      <Text style={styles.description}>{textHasil}</Text>
    </View>
  );

  render() {
    const {isSelected} = this.state;
    let textHasil = '';
    if (isSelected === false) {
      textHasil = 'uncheck';
    } else {
      textHasil = 'check';
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.item.title}</Text>
            <Image source={image.expand} style={styles.Image} />
          </View>
        </TouchableWithoutFeedback>
        {this.renderDetails(textHasil)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  description: {
    flex: 1,
    fontSize: 22,
    color: 'gray',
    paddingTop: 10,
  },
  Image: {
    width: 20,
    height: 20,
  },
  title: {
    flex: 1,
    fontSize: 22,
  },
});

export default HomeItem;
