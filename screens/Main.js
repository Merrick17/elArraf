import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Modal} from 'react-native';
import {NavBar, Button, Input} from 'galio-framework';
import {GlobalStyles} from '../styles/global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'galio-framework';
import UserItem from '../components/UserItem';

const MainScreen = props => {
  return (
    <View style={GlobalStyles.maincreen}>
      <ScrollView>
        <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
        <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
        <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
        <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
        <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
        <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
          <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
          <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
          <UserItem
          title={'El Arraf el Maghrebi'}
          desc={'Desription Mezyana 3al arraf mté3na.'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScroll: {
    flex: 1,
    //alignItems: 'flex-start',
    height: '100%',
  },
  header: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginTop: 10,
  },
  txtStyle: {
    color: '#487dff',
    fontFamily: 'poppins_bold',
    textAlign: 'center',
    margin: 5,
  },
  product: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 256,
    width: 185,
    margin: 10,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: 380,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  labelStyle: {
    alignSelf: 'flex-start',
    marginVertical: 2,
    fontSize: 13,
    //marginRight: 30,
    fontFamily: 'poppins_bold',
    color: 'black',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputStyle: {
    //backgroundColor: 'transparent',
    //paddingHorizontal:150,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 2,
    alignContent: 'flex-start',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'poppins_bold',
    fontSize: 17,
  },
});
export default MainScreen;
