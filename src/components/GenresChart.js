import React from "react";
import {View} from "react-native";
import {Radar} from "react-native-pathjs-charts";

class GenresChart extends React.Component {
    render() {
        let data = [{
            "speed": 74,
            "balance": 29,
            "explosives": 40,
            "energy": 40,
            "flexibility": 30,
            "agility": 25,
            "endurance": 44
        }];

        let options = {
            width: 300,
            height: 300,
            margin: {
            },
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

        return (
            <View>
                <Radar data={data} options={options}/>
            </View>
        )
    }
}

export default GenresChart;
