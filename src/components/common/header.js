/* eslint-disable semi */
// Import Libraries for making header component
import React from 'react';
import { View, Text } from 'react-native';

// Making Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
        </View>
        );
    };

const styles = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.2,
        elevation: 4,
        position: 'relative',
    },
};
// Making component to be available to call it anywhere 
export { Header };
