import React from "react";
import {Text, Spinner, List, ListItem} from "native-base";
import TvShowCard from './TvShowCard';

const TvShowsList = ({tvShows, searching, error, onItemPressed}) => {
    if (searching) {
        return <Spinner/>
    }
    if (error) {
        return <Text>{error}</Text>
    }
    return (
        <List>
            {
                tvShows.map((tvShow, i) =>
                    <ListItem key={i}>
                        <TvShowCard {...tvShow} onPress={() => onItemPressed(tvShow)}/>
                    </ListItem>
                )
            }
        </List>
    );
};

export default TvShowsList;