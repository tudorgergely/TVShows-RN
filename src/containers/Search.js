import React from "react";
import {View, TextInput, TouchableNativeFeedback, StyleSheet, Alert, ListView} from "react-native";
import {connect} from "react-redux";
import {genericSearch} from "../redux/modules/search";
import {Container, Content, InputGroup, Input} from "native-base";
import TvShowsList from "../components/TvShowsList";
import {Actions} from "react-native-router-flux";
import {starTvShow} from "../redux/modules/favorite";

const mapStateToProps = ({search}) => {
    return {
        tvShows: search.tvShows,
        searching: search.searching,
        error: search.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        genericSearch(q, page) {
            dispatch(genericSearch(q, page))
        },
        addToFavorites(tvShow) {
            dispatch(starTvShow(tvShow));
        }
    }
};

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            searchText: ''
        };
    }

    componentDidMount() {
        // Snackbar.show({
        //     title: 'Hello world'
        // });
    }

    render() {
        return <Container style={{marginTop: 60}}>
            <Content>
                <InputGroup borderType='underline'>
                    <Input placeholder='Search for a TV show' onChangeText={this.searchInputChanged}/>
                </InputGroup>
                <TvShowsList {...this.props}
                    onItemPressed={(tvShow) => Actions.TvShowDetail({id:tvShow.id, title: tvShow.title})}
                    onItemFavorite={(tvShow) => this.props.addToFavorites(tvShow)}/>
            </Content>
        </Container>
    }

    search = () => {
    };

    searchInputChanged = (searchText) => {
        this.props.genericSearch(searchText, 1);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);