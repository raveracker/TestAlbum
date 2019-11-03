// Import Libraries for making header component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Making Component

class AlbumList extends Component {
    // eslint-disable-next-line no-undef
    state = { albums: [] };
    
    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
    
    renderAlbums() {
        return (
            this.state.albums.map(
                album => <AlbumDetail key={album.title} album={album} />
            )
        );
    }
    
    render() {
        console.log(this.state);

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
// Making component to be available to call it anywhere 
export default AlbumList;
