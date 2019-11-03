import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, textStyle, containerStyle } = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2,
        width: 100, 
        height: 50, 
    },
    textStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
};

export { Input };
