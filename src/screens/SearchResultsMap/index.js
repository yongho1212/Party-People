import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker'

import places from '../../../assets/data/feed';


const SearchResultsMaps = () => {

const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.78825,
          longitude: -16.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

      {places.map(place => (
        <CustomMarker
          isSelected = {place.id === setSelectedPlaceId}
          coordinate={place.coordinate}
          price={place.newPrice}
        />)
          )}    
      </MapView>    
    </View>
  );
};

export default SearchResultsMaps;
