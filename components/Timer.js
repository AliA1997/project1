import React, { PureComponent } from 'react';
import { View } from 'react-native';
const Counter = import('./Counter');
import * as config from '../utils/config';

export default class Timer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startTime: props.startTime ? props.startTime : 0,
            endTime: props.endTime ? props.endTime : 60,
            timeLeft: props.startTime ? props.startTime : 0,
            timeToAddValue: '',
            mode: config.timeModes[0]
        };
    }

    //Use es6 callback to lexically scope function at creation time.
    pauseTimer = () => {
        this.setState({
            mode: config.timeModes[1]
        });
    }

    endTimer = () => {
        this.setState({
            mode: config.timeModes[3],
            timeLeft: 0
        });
    }

    addTime = () => {
        const timeToAdd = this.state.timeToAddValue;
        this.setState(prevState => ({
            endTime: prevState.endTime + parseInt(timeToAdd);
        }))
    }

    handleChange = (text) => {
        this.setState({
            timeToAddValue: text
        });
    }

    render() {
        return (
            <View />
        );
    }
}