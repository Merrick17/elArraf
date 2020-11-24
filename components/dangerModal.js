import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from 'galio-framework';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-picker';
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton,
} from 'react-native-modals';
import {GlobalStyles} from '../styles/global';
import {useSelector, useDispatch} from 'react-redux';
import { addDangerZone } from '../actions/danger.actions';
const DangerModal = props => {
  const modalState = useSelector(state => state.modalReducer);
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [categ, setCateg] = useState('Air');
  const [image, setImage] = useState(undefined);
  const dispatch = useDispatch();
  const options = {
    title: 'Selectioner image',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={modalState}
        footer={
          <ModalFooter>
            <ModalButton
              text="Annuler"
              onPress={() => {
                dispatch({
                  type: 'HIDE_MODAL',
                });
              }}
            />
            <ModalButton
              text="OK"
              onPress={() => {
                dispatch({
                  type: 'HIDE_MODAL',
                });
                let zone = new FormData();
                // type: req.body.type,
                // lat: req.body.lat,
                // lng: req.body.lng,
                // imageUrl: req.body.image,
                // addedBy: req.body.user,
                // dangerZone:req.body.dangerZone
                zone.append('type', categ);
                zone.append('lat', lat);
                zone.append('lng', lng);
                zone.append('image', image);
                zone.append('user', '');
                zone.append('dangerZone', categ);
                dispatch(addDangerZone(zone,''))
              }}
            />
          </ModalFooter>
        }>
        <ModalContent>
          <Text style={GlobalStyles.InputLabel}>Latitude</Text>
          <Input
            placeholder=""
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
            onChangeText={text => {
              setLat(Number(text));
            }}
            value={lat.toString()}
          />
          <Text style={GlobalStyles.InputLabel}>Longtitude</Text>
          <Input
            placeholder=""
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
            borderless={true}
            onChangeText={text => {
              setLng(Number(text));
            }}
            value={lng.toString()}
          />
          <Text style={GlobalStyles.InputLabel}>Description</Text>
          <Input
            placeholder=""
            style={GlobalStyles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
          />
          <Picker
            selectedValue={categ}
            style={{height: 50, width: 150}}
            itemStyle={GlobalStyles.InputLabel}
            onValueChange={(itemValue, itemIndex) => setCateg(itemValue)}>
            <Picker.Item label="Air" value="Air" />
            <Picker.Item label="Eau" value="Eau" />
            <Picker.Item label="Terre" value="Terre" />
          </Picker>
          <Button
            color="#00BFA6"
            style={GlobalStyles.BtnStyle}
            onPress={() => {
              ImagePicker.showImagePicker(options, response => {
                console.log('Response = ', response);

                if (response.didCancel) {
                  console.log('User cancelled image picker');
                } else if (response.error) {
                  console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                  console.log(
                    'User tapped custom button: ',
                    response.customButton,
                  );
                } else {
                  const source = {uri: response.uri};

                  // You can also display the image using data:
                  // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                  setImage(source);
                }
              });
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'poppins_bold',
              }}>
              Ajouter Image
            </Text>
          </Button>
        </ModalContent>
      </Modal>
    </View>
  );
};

export default DangerModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 50,
  },
});
