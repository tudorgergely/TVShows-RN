import React from "react";
import {Text, Spinner, List, ListItem, Container, Content} from "native-base";
import {View} from 'react-native';
import TvShowCard from './TvShowCard';
import CreateCollection from '../components/CreateCollection';

class TvShowsList extends React.Component {
    constructor() {
        super();

        this.state = {
            createCollectionVisible: false
        }
    }

    render() {
        const {tvShows, searching, error, onItemPressed, onItemFavorite} = this.props;
        if (searching) {
            return <Spinner/>
        }
        if (error) {
            return <Text>{error}</Text>
        }
        return (
            <Container style={{flex: 1}}>
                <Content>
                    <List>
                        {
                            tvShows.map((tvShow, i) =>
                                <ListItem key={i}>
                                    <TvShowCard {...tvShow} onPress={() => onItemPressed(tvShow)} onFavorite={onItemFavorite}/>
                                </ListItem>
                            )
                        }
                    </List>
                </Content>
            </Container>

        );
    }

    renderCreateCollection() {
        if (this.state.createCollectionVisible) {
            return <View style={{position: 'absolute', left: 0,right: 0, bottom: 0}}>
                    <CreateCollection/>
                </View>
        }
        return null;
    }

    showCreateCollection() {
        this.setState({createCollectionVisible: true});
    }
}

export default TvShowsList;