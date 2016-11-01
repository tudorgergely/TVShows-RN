import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableNativeFeedback,
    StyleSheet,
    Alert,
    ListView
} from 'react-native';
import {connect} from 'react-redux';
import {loadInitialData} from "../redux/modules/home";
import {MKSpinner} from 'react-native-material-kit';

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
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Home extends React.Component {
    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        const {items} = this.props;
        if (items && items.length) {
            const dataSource = ds.cloneWithRows(items);
            return <ListView
                enableEmptySections
                contentContainerStyle={styles.listCont}
                style={styles.list}
                dataSource={dataSource}
                renderRow={item => <Text>{item}</Text>}/>
        } else {
            return <View style={styles.loadingContainer}>
                <MKSpinner />
            </View>
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);