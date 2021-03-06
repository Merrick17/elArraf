import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import DangerModal from '../components/dangerModal';
import {Button, Input} from 'galio-framework';
import {GlobalStyles} from '../styles/global';
const MapsScreen = () => {
  const [long, setLong] = useState(0);
  const [alt, setLalt] = useState(0);
  const [search, setSearch] = useState('');
  const dispatcher = useDispatch();
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLong(info.coords.longitude);
      setLalt(info.coords.latitude);
    });
  }, []);
  MapboxGL.setAccessToken(
    'pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q',
  );

  return (
    <View style={styles.page}>
      <DangerModal lat={alt} lng={long} />

      <View style={styles.container}>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Input
            placeholder="Rechercher"
            style={styles.inputItem}
            bgColor={'#EEEEEE'}
            borderless={true}
            value={search}
            onChangeText={text => {
              setSearch(text);
            }}
          />
          <Button
            
            color="#00BFA6"
         
            style={{width: 100, marginVertical: 7,marginLeft:10}}>
            Rechercher
          </Button>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Button
            size="small"
            round
            color="#00BFA6"
            style={{width: 80, marginVertical: 7, marginHorizontal: 10}}>
            Air
          </Button>
          <Button
            size="small"
            round
            color="#00BFA6"
            style={{width: 80}}
            style={{width: 70, marginVertical: 7, marginHorizontal: 10}}>
            Eau
          </Button>
          <Button
            size="small"
            round
            color="#00BFA6"
            style={{width: 80}}
            style={{width: 70, marginVertical: 7, marginHorizontal: 10}}>
            Terre
          </Button>
        </View>

        <MapboxGL.MapView
          style={styles.map}
          onPress={feature => {
            console.log('Coords:', feature.geometry.coordinates);
            dispatcher({
              type: 'SHOW_MODAL',
            });
          }}>
          <MapboxGL.Camera centerCoordinate={[long, alt]} zoomLevel={9} />
          {/* {info.map(elm => {
            //console.log("Eleeemnt",elm);
            return (
              <MapboxGL.MarkerView   coordinate={[elm.long, elm.lat]}/>

            );
          })} */}
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default MapsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  inputItem:{
    width:"100%",
    alignSelf: 'center',
    marginBottom: 2,
    alignContent: 'flex-start',
    marginLeft:5
  }
});
