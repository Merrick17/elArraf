import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {GlobalStyles} from '../styles/global';
const DetailsEvents = props => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: '100%',
      }}>
      <Image style={styles.image} source={require('../assets/env.png')} />
      <View style={styles.news}>
        <Text h5 style={GlobalStyles.newsTitle} color={'#50d090'}>
          {/* {item.title} */}
        </Text>
        <View style={styles.footer}>
          <View style={styles.title}>
            <Text color={'white'} size={15} bold>
              {/* {item.source.name} */}
            </Text>
            <Text p size={15} color={'white'} style={{marginTop: 5}}>
              {/* {dateFormatter(item.publishedAt)} */}
            </Text>
          </View>
        </View>
        <Text p color={'white'} size={14} style={styles.desription}>
          {/* {item.description} */}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
    zIndex: 1,
  },
  news: {
    //bottom: 0,
    //position: "absolute",
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFF',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    opacity: 0.9,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
    //height: Dimensions.get("window").height * 0.4
  },
  desription: {
    marginLeft: 5,
    textAlign: 'left',
    alignSelf: 'flex-end',
    bottom: 0,
  },
  footer: {
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    margin: 5,
  },
  title: {
    marginTop: 5,
    marginLeft: 3,
    paddingLeft: 4,
  },
  titleStyle: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
});

export default DetailsEvents;
