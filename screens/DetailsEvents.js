import { Button } from 'galio-framework';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {GlobalStyles} from '../styles/global';
const DetailsEvents = ({route, navigation}) => {
  const [item, setItem] = useState({
    title: '',
    description: '',
    eventImage: '',
    datEvent: '',
  });
  useEffect(() => {
    console.log(route.params.event);
    setItem(route.params.event);
    console.log(item);
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: '100%',
      }}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://env-hero.herokuapp.com/' +
            route.params.event.eventImage,
        }}
      />
      <View style={styles.news}>
        <Text h5 style={GlobalStyles.newsTitle} color={'black'}>
          {route.params.event.title}
        </Text>
        <View style={styles.footer}>
          <View style={styles.title}>
            <Text color={'white'} size={15} bold>
              {/* {item.source.name} */}
            </Text>
            <Text p size={15} color={'white'} >
             {route.params.event.datEvent}
            </Text>
          </View>
        </View>
        <Text p color={'white'} size={14} style={styles.desription}>
          {route.params.event.description}
        </Text>
        <Button
            color="#00BFA6"
           style={{
             alignSelf:'center',
             borderRadius:10,
             marginTop:50
           }}
            onPress={() => {
            
              //props.navigation.navigate('main');
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'poppins_bold',
              }}>
              Participer
            </Text>
          </Button>
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
    //opacity: 0.9,
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
    alignSelf: 'flex-start',
    bottom: 0,
    fontSize:20
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
