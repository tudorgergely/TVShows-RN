import React from "react";
import {View, TextInput, TouchableNativeFeedback, StyleSheet, Alert, ListView} from "react-native";
import {connect} from "react-redux";
import {loadInitialData} from "../redux/modules/home";
import {Spinner, Container, Content, List} from "native-base";
import TvShowCard from "../components/TvShowCard";
import {Actions} from "react-native-router-flux";

const mapStateToProps = ({home}) => {
    return {
        items: home.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadInitialData() {
            dispatch(loadInitialData())
        }
    }
};

const styles = StyleSheet.create({
    list: {
        marginTop: 60,
    },
    listCont: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class Home extends React.Component {
    static contextTypes = {
        routes: React.PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        const {items} = this.props;
        const tvShow = {
            "title": "House of Cards",
            "year": "2013–",
            "id": "tt1856010",
            "Type": "series",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODMyMjc3MV5BMl5BanBnXkFtZTgwNDgzNDc5NzE@._V1_SX300.jpg"
        };
        if (items && items.length) {
            return <Container>
                <Content>
                    <List style={styles.list}>
                        <TvShowCard {...tvShow} onPress={() => {
                            console.log(tvShow);
                            return Actions.TvShowDetail({data: tvShow.id});
                        }}/>
                    </List>
                </Content>
            </Container>
        } else {
            return <View style={styles.loadingContainer}>
                <Spinner />
            </View>
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);