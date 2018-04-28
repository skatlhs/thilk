import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Image } from 'react-native';

import Header from './Header';
import ActionButtons from './ActionButtons';


const styles = StyleSheet.create({
    root: {
        minHeight: 600,
        paddingBottom: 0,
    },
    
    img: {
        flex: 1,
        
    }
    
})

class PhotoCard extends Component {
    state = { }
    render() {
        return (
            <View style={styles.root}>
              <Header />
                <Image style={styles.img} source={{ uri: "https://images.unsplash.com/photo-1501040784059-8fc07bfa4e2c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf68f8082dc4d4a255e7039578bf680e&auto=format&fit=crop&w=400&q=60"}} />
            <ActionButtons />
            </View>
        );
    }

}

export default PhotoCard;