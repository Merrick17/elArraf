import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Input, theme, Button} from 'galio-framework';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/user.actions';
// import {authUser} from '../store/auth/actions';
// import {showSpinner} from '../store/spinner/actions';
import Spinner from 'react-native-loading-spinner-overlay';

const Home = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [email, setEmail] = useState('');
  const [psw, setPass] = useState('');
  const [showError, setShowError] = useState(false);
  useEffect(()=>{
    console.log(state.loaderReducer)
  })
  return (
    <View style={GlobalStyles.maincreen}>
      <Image
        source={require('../assets/env.png')}
        style={{height: 200, width: 260, alignSelf: 'center', marginTop: 20}}
      />
      <View style={styles.bottomCard}>
        <Spinner
          visible={state.loaderReducer}
          textContent={'Veuillez Patienter...'}
          textStyle={{
            color: '#FFF',
          }}
        />
        <View style={styles.content}>
          <Text style={GlobalStyles.label}>Se Connecter</Text>
          <Text style={GlobalStyles.InputLabel}>Login</Text>
          <Input
            placeholder="Login"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
            onChangeText={(text) => {
              setEmail(text);

            }}
            value={email}
          />

          <Text style={GlobalStyles.errorLabel}>
            {showError ? 'Veuillez saisir une adresse email valide' : ''}
          </Text>

          <Text style={GlobalStyles.InputLabel}>Mot de passe</Text>
          <Input
            placeholder="**************"
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
            password
            viewPass
            value={psw}
            onChangeText={(text) => {
              setPass(text);
            }}
          />
          <Button
            color="#00BFA6"
            style={GlobalStyles.BtnStyle}
            onPress={() => {
              dispatch(login(email, psw, props.navigation));
              //props.navigation.navigate('main');
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'poppins_bold',
              }}>
              Se Connecter
            </Text>
          </Button>
          <View style={{marginVertical: 5}}>
            <Text
              style={{
                color: '#00BFA6',
                fontFamily: 'poppins_bold',
                alignSelf: 'center',
              }}>
              Vous n'avez pas un compte?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('signup');
              }}>
              <Text
                style={{
                  color: '#00BFA6',
                  fontFamily: 'poppins_bold',
                  alignSelf: 'center',
                }}>
                Inscrivez vous
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bottomCard: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    height: Dimensions.get('window').height * 0.55,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  content: {
    alignSelf: 'center',
    marginTop: 2,
  },
});
