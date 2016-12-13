import React from "react";
import {View, TextInput, TouchableNativeFeedback, StyleSheet, Alert, ListView} from "react-native";
import {connect} from "react-redux";
import {Spinner} from "native-base";
import TvShowFullPage from "../components/TvShowFullPage";
import {loadTvShow} from "../redux/modules/tvShowDetail";

const mapStateToProps = ({tvShowDetail}) => {
    return {
        tvShow: tvShowDetail.tvShow,
        loading: tvShowDetail.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTvShow(id) {
            dispatch(loadTvShow(id))
        }
    }
};

class TvShowDetail extends React.Component {
    componentDidMount() {
        this.props.loadTvShow(this.props.id);
    }

    render() {
        const {tvShow, loading} = this.props;
        if (!loading) {
            return <TvShowFullPage {...tvShow}/>
        } else {
            return <Spinner style={{marginTop:60}}/>
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetail);