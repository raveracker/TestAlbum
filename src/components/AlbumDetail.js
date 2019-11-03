// Import Libraries for making header component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, Button, CardSection } from './common';


// Making Component
const AlbumDetail = ({ album }) => {
    // eslint-disable-next-line camelcase
    const { title, artist, thumbnail_image, image, url } = album;
    // eslint-disable-next-line max-len
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;

    return (
    <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }}
                /> 
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
    </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        overflow: 'hidden',
        borderRadius: 10,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};
// Making component to be available to call it anywhere 
export default AlbumDetail;
