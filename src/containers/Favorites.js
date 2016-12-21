import React from 'react';
import {loadFavorites} from "../redux/modules/favorite";
import {Spinner} from 'native-base';
import TvShowsList from '../components/TvShowsList';
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
        return <TvShowsList tvShows={favoriteTvShows || []} searching={loading}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);