import React from "react";
import {Image} from "react-native";
import {Text, Container, Content} from "native-base";
import GenresChart from "./GenresChart";

const TvShowFullPage = ({title, year, plot, posterUrl, onClick}) => {
    return (
        <Container>
            <Content>
                <Image style={{width: 200, height: 300}} source={{uri: posterUrl}}/>
                <Text>{plot}</Text>
                <GenresChart style={{alignSelf: 'center'}}/>
            </Content>
        </Container>
    );
};

export default TvShowFullPage;