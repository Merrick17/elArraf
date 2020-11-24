import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'galio-framework';
import {Picker} from '@react-native-picker/picker';
import Modal, {
  ModalContent,
  ModalFooter,
  ModalButton,
} from 'react-native-modals';
import {GlobalStyles} from '../styles/global';
import {useSelector, useDispatch} from 'react-redux';
const DangerModal = (props) => {
  const modalState = useSelector((state) => state.modalReducer);
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [categ, setCateg] = useState('Air');
  const dispatch = useDispatch();
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
            onChangeText={(text) => {
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
            onChangeText={(text) => {
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
