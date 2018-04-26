import React, { Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

//import Header from './Header';


const styles = StyleSheet.create({
    root: {
        minHeight: 600,
        backgroundColor: '#35a0ef',
        paddingBottom: 10,
    }
})

class PhotoCard extends Component {
    state = { }
    render() {
        return (
            <View style={styles.root}>
        //        <Header />
                <Text>Hello Photo</Text>
            </View>
        );
    }

}

export default PhotoCard;