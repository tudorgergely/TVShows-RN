import React from "react";
import {Container, Content} from "native-base";
import {loadFavorites} from "../redux/modules/favorite";
import TvShowsList from "../components/TvShowsList";
import {connect} from "react-redux";

const mapStateToProps = ({favorite}) => {
    return {
        favoriteTvShows: favorite.favoriteTvShows,
        loading: favorite.loading
    };
};

const mapDispatchToProps = dispatch => ({
    loadFavorites() {
        dispatch(loadFavorites());
    }
});

class Favorites extends React.Component {
    componentDidMount() {
        this.props.loadFavorites();
    }

    render() {
        const {favoriteTvShows, loading} = this.props;
        return <Container style={{marginTop: 60}}>
            <Content><TvShowsList tvShows={favoriteTvShows || []} searching={loading}/></Content>
        </Container>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);