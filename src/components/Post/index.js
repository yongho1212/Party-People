import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const Post= () => {
    return(
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri: 'https://a0.muscache.com/im/pictures/a8b4b91d-cf9f-4f63-8c0f-c38bceb2a48a.jpg?im_w=960'}}
        />
        <Text style={styles.bedrooms}>1 bed 1bedroom </Text>
        <Text style={styles.descriptions} numberOfLines={2}>
        신제주 도심 중심에 위치, 주변상권이 발달되어 저녁에도 안전히 이용할 수 있습니다. 제주공항에서 차로 10분채 걸리지 않으며, 도보로 즐길 수 있는 로컬식당이 많습니다. 주변에 버스정류장이 많아 대중교통 이용도 편리합니다. 
        </Text>

        <Text style={styles.prices}>
            <Text style={styles.oldPrice}>$36</Text>
            <Text style={styles.newPrice}>  $32</Text>
            / night
        </Text>
        <Text style={styles.totalPrice}>$320 total</Text>
    </View>
    );
};


export default Post; 
