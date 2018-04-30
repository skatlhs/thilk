import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { makeHitSlop } from '../../utils/themes';

const styles = StyleSheet.create({
    root: {
        height: 50,
        paddingHorizontal: 16,
        top: 0,
        bottom: 102,
        flexDirection: 'row',
    },
    
    actionWrapper: {
        flex: 1.7,
        flexDirection: 'row',
    },
    
    actionButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
        
    },
    
    fakeView: {
        flex: 3,
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
            <TouchableOpacity  style={styles.actionButton}>
                <Ionicons name="ios-shirt-outline" size={40} />
            </TouchableOpacity>

        <TouchableOpacity  style={styles.actionButton}>
                <Ionicons name="ios-chatbubbles-outline" size={35} />
            </TouchableOpacity>        
        
        <TouchableOpacity style={styles.actionButton}>
               <Ionicons name="ios-send-outline" size={45}  />
            </TouchableOpacity>
        
        </View>
        
        <View style={styles.fakeView} />
        
       <TouchableOpacity style={styles.bookmarkWrapper}>
                <Ionicons name="ios-bookmark-outline" size={40}  />
            </TouchableOpacity>
        
      </View>
    );
  }
}
export default ActionButtons;