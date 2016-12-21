import React from 'react';
import {Image} from 'react-native';
import {Card, CardItem, Text, Thumbnail, Button} from 'native-base';

const TvShowCard = ({title, year, posterUrl, onPress, onLongPress, onFavorite}) => (
    <Card style={{flex: 0}}>
        <CardItem button onPress={onPress} onLongPress={onLongPress}>
            <Thumbnail source={{uri: posterUrl}}/>
            <Text>{title}</Text>
            <Text note>{year}</Text>
            <Button style={{alignSelf: 'flex-end'}} onPress={onFavorite}>Favorite</Button>
        </CardItem>
    </Card>
);

export default TvShowCard;