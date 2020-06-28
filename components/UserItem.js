import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
const UserItem = props => {
  return (
    <TouchableOpacity>
      <View style={Btnstyles.main}>
        <Image
          style={{width: 50, height: 50, marginHorizontal: 17}}
          source={require('../assets/avatar.png')}
        />

        <View>
          <View style={Btnstyles.mainTitle}>
            <Text color={'#56e39c'} style={Btnstyles.titleTxt} size={20}>
              {props.title}
            </Text>
            <Text color={'#56e39c'} style={Btnstyles.descText} size={20}>
              {props.desc}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const Btnstyles = StyleSheet.create({
  main: {
    margin: 5,
    backgroundColor: '#487dff',
    borderRadius: 15,
    height: 90,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    //justifyContent: 'space-evenly',
  },
  mainTitle: {
    flex: 1,
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingHorizontal:50
  },
  innerBtn: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  txt: {
    marginVertical: 2,
    fontFamily: 'poppins_black',
  },
  titleTxt2: {
    marginVertical: 2,
    fontFamily: 'poppins_black',
    //marginHorizontal:50,
    position: 'absolute',
    left: 10,
    alignSelf: 'flex-end',
    marginLeft: 180,
  },
  titleTxt: {
    marginTop: 7,
    marginBottom: 2,
    fontFamily: 'poppins_black',
    alignSelf: 'flex-start',
    //position:'absolute',
    //marginRight: 250,
    color: '#ffff',
    //marginHorizontal:50
  },
  descText: {
    //marginVertical: 10,
    fontFamily: 'poppins_regular',
    alignSelf: 'flex-start',
    //position:'absolute',
    //marginRight: 250,
    color: '#ffff',
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
  },

  icn: {
    color: 'white',
    fontSize: 20,
    //alignContent: "space-around",
    //justifyContent:'flex-end',
    //paddingRight:50,
    position: 'absolute',
    right: 20,
  },
  solde: {
    marginVertical: 2,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  pourcentage: {
    marginVertical: 2,
    fontFamily: 'Roboto-Bold',
    color: '#56e39c',
  },
});
