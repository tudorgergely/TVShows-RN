import React from "react";
import {View} from "react-native";
import {Radar} from "react-native-pathjs-charts";
import {AVAILABLE_GENRES} from "../assets";

const CHART_DEFAULT_OPTIONS = {
    width: 300,
    height: 300,
    margin: {},
    r: 100,
    max: 100,
    fill: "#2980B9",
    stroke: "#2980B9",
    animate: {
        type: 'oneByOne',
        duration: 200
    },
    label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: '#34495E'
    }
};

const GenresChart = ({genres}) => {
    const data = {
        ...AVAILABLE_GENRES,
        ...genres.reduce((final, current) => ({...o, [current]: 1}), {})
    };

    return (
        <View>
            <Radar data={data} options={CHART_DEFAULT_OPTIONS}/>
        </View>
    );
};

GenresChart.propTypes = {
    genres: React.PropTypes.array
};

export default GenresChart;
