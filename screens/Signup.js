import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import {GlobalStyles} from '../styles/global';
import {Input, theme, Button} from 'galio-framework';
import {useDispatch} from 'react-redux';
import {register} from '../actions/user.actions';

const SignupScreen = (props) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const [name, setName] = useState('');
  const [adr, setAdr] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={GlobalStyles.maincreen}>
      <ScrollView
        style={{
          marginVertical: 10,
          height:Dimensions.get('window').height
        }}>

        <View style={styles.bottomCard}>
          <View style={styles.content}>
            {/* <Text style={GlobalStyles.label}>Inscription</Text> */}
            <Text style={GlobalStyles.InputLabel}>Nom </Text>
            <Input
              placeholder="Exemple "
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
            />
            <Text style={GlobalStyles.InputLabel}>Prenom </Text>
            <Input
              placeholder="Exemple "
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              value={fullname}
              onChangeText={(text) => {
                setFullName(text);
              }}
            />
            <Text style={GlobalStyles.InputLabel}>Login</Text>
            <Input
              placeholder="Exemple "
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              value={login}
              onChangeText={(text) => {
                setLogin(text);
              }}
            />
            <Text style={GlobalStyles.InputLabel}>Email</Text>
            <Input
              placeholder="mail@example.com"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              onChangeText={(text) => {
                setEmail(text);
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (reg.test(email) === false) {
                  setShowError(true);
                } else {
                  setShowError(false);
                }
              }}
              value={email}
            />
            {/* <Text style={GlobalStyles.errorLabel}>
              {showError ? 'Veuillez saisir une adresse email valide' : ''}
            </Text> */}
            <Text style={GlobalStyles.InputLabel}>Adresse</Text>
            <Input
              placeholder="Exemple"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              value={adr}
              onChangeText={(text) => {
                setAdr(text);
              }}
            />
            <Text style={GlobalStyles.InputLabel}>Téléphone</Text>
            <Input
              placeholder="9999999999999"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              onChangeText={(text) => {
                setPhone(text);

                if (
                  phone.length != 8 &&
                  Number.isInteger(Number(phone)) == false
                ) {
                  setPhoneError(true);
                } else {
                  setPhoneError(false);
                }
              }}
              value={phone}
            />
            {/* <Text style={GlobalStyles.errorLabel}>
              {phoneError ? 'Veuillez saisir un numéro valide' : ''}
            </Text> */}
            <Text style={GlobalStyles.InputLabel}>Mot de passe</Text>
            <Input
              placeholder="**************"
              style={GlobalStyles.inputItem}
              bgColor={'#EEEEEE'}
              borderless={true}
              password
              viewPass
              onChangeText={(text) => {
                setPassword(text);

                if (password.length < 8) {
                  setPassError(true);
                } else {
                  setPassError(false);
                }
              }}
              value={password}
            />
            {/* <Text style={GlobalStyles.errorLabel}>
              {passError ? 'votre mot de passe doit avoir 8 caractères' : ''}
            </Text> */}
            <Button
              color="#00BFA6"
              style={GlobalStyles.BtnStyle}
              onPress={() => {
                let newUser = {
                  email: email,
                  password: password,
                  firstName: fullname,
                  lastName: name,
                  address: adr,
                  phoneNumber: phone,
                  login: login,
                  isAdmin: false,
                };
                dispatch(register(newUser, props.navigation));
                // if (
                //   email == '' ||
                //   password == '' ||
                //   fullname == '' ||
                //   adr == '' ||
                //   phone == ''
                // ) {
                //   Alert.alert(
                //     'Erreur',
                //     'Veuillez remplir les champs !',
                //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                //     {cancelable: false},
                //   );
                // } else {

                // }
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'poppins_bold',
                }}>
                Inscrivez vous
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  bottomCard: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    height: Dimensions.get('window').height ,
    width: Dimensions.get('window').width,
    //position: 'fixed',
    bottom: 0,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,

    // elevation: 7,
    // marginBottom:20
  },
  content: {
    alignSelf: 'center',
    marginTop: 2,
  },
});
