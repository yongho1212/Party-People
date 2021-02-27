import React, {useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

import places from '../../../assets/data/feed';


const SearchResultsMaps = () => {

const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.530067547647896,
          longitude: 126.99917569286329,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
 
      {places.map(place => (
        <CustomMarker
        coordinate={ place.coordinate }
        price={place.newPrice}
        isSelected = {place.id === selectedPlaceId}
        onPress={() => setSelectedPlaceId(place.id)}
        />)
      )}    
      </MapView>

      <View style={{position:'absolute', bottom:40}}>
        <PostCarouselItem post={places[0]} />
      </View>

    </View>
  );
};

export default SearchResultsMaps;
