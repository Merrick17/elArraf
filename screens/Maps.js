import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import DangerModal from '../components/dangerModal';

const MapsScreen = () => {
  const [long, setLong] = useState(0);
  const [alt, setLalt] = useState(0);
  const dispatcher = useDispatch();
  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
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
        <MapboxGL.MapView
          style={styles.map}
          onPress={(feature) => {
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
});
