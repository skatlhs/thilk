import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'; 
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const styles = StyleSheet.create({
    root: {
        height: 50,
        paddingHorizontal: 16,
        top: 10,
        flexDirection: 'row'
    },
    
    actionWrapper: {
        flex: 2,
        flexDirection: 'row'
    },
    
    actionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
        
    },
    
    fakeView: {
        flex: 2,
    },
    
    bookmarkWrapper: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
}) 

class ActionButtons extends Component {
  state = {};
  render() {
    return (
      <View style={styles.root}>
        
        <View style={styles.actionWrapper}>
            <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="heart-o" size={30} />
            </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="comment-o" size={30} />
            </TouchableOpacity>        
        
        <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="send-o" size={30} />
            </TouchableOpacity>
        
        </View>
        
        <View style={styles.fakeView} />
        
       <TouchableOpacity style={styles.bookmarkWrapper}>
                <FontAwesome name="bookmark-o" size={30}  />
            </TouchableOpacity>
        
      </View>
    );
  }
}
export default ActionButtons;