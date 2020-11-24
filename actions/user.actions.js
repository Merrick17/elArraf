import axios from 'axios';
import {Alert} from 'react-native';
const BASE_URL = 'https://env-hero-api.herokuapp.com/user';
export const login = (email, password, navigation) => async (dispatch) => {
  dispatch({
    type: 'SHOW_LOADER',
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({login: email, password: password});

  try {
    const res = await axios.post(
      BASE_URL + '/login',
      {login: email, password: password},
      config,
    );

    console.log(res.data);

    if (res.data.token) {
      let payload = {
        auth: true,
        token: res.data.token,
        id: res.data.user,
      };
      dispatch({
        type: 'LOGIN_USER',
        payload: payload,
      });
      navigation.replace('main');
      dispatch({
        type: 'HIDE_LOADER',
      });
    } else {
      dispatch({
        type: 'HIDE_LOADER',
      });
      Alert.alert(
        ' Erreur',
        'Email ou mot de passe incorrecte',
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  } catch (err) {
    // dispatch({
    //   type: 'LOGIN_FAIL',
    // });
  }
};

export const register = (user, navigation) => async (dispatch) => {
  dispatch({
    type: 'SHOW_LOADER',
  });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify(user);

  try {
    const res = await axios.post(BASE_URL + '/register', user, config);

    console.log(res.data);

    if (res.data.token) {
      let payload = {
        auth: true,
        token: res.data.token,
        id: res.data.user,
      };
      dispatch({
        type: 'LOGIN_USER',
        payload: payload,
      });
      navigation.replace('main');
      dispatch({
        type: 'HIDE_LOADER',
      });
    } else {
      dispatch({
        type: 'HIDE_LOADER',
      });
      Alert.alert(
        ' Erreur',
        'Email ou mot de passe incorrecte',
        [
          {
            text: 'OK',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  } catch (err) {
    // dispatch({
    //   type: 'LOGIN_FAIL',
    // });
  }
};
