import React from 'react';
import {Image} from 'react-native';
import {Row, Grid, H1, Text, Container, Content} from 'native-base';

const TvShowFullPage = ({title, year, plot, posterUrl, onClick}) => {
    console.log(posterUrl);
    return (
        <Container>
            <Content>
                <Image style={{width: 200, height: 300}} source={{uri: posterUrl}}/>
                <Text>{plot}</Text>
            </Content>
        </Container>

    );
}

export default TvShowFullPage;