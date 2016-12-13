import React from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Text, Thumbnail} from 'native-base';

const TvShowCard = ({title, year, posterUrl, onPress}) => (
    <Card style={{flex: 0}}>
        <CardItem button onPress={onPress}>
            <Thumbnail source={{uri: posterUrl}}/>
            <Text>{title}</Text>
            <Text note>{year}</Text>
        </CardItem>
    </Card>
);

export default TvShowCard;