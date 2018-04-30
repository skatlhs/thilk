import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Header from './Header';
import ActionButtons from './ActionButtons';
import Meta from './Meta';
import CommentInput from '../CommentInput';


const styles = StyleSheet.create({
    root: {
       minHeight: 400
    },
    
    img: {
        flex: 1,
        minHeight: 500
    },
    
    commentsWrapper: {
        paddingHorizontal: 16,
        paddingBottom: 10
    },
    
    commentViewAll: {
        
    },
    
    timeAgoWrapper: {
        
    }, 
    
    timeAgo: {
        paddingHorizontal: 16,
        color: '#535353',
        fontSize: 10,
        paddingBottom: 10
    }
    
})

class PhotoCard extends Component {
    state = { }
    render() {
        return (
            <View style={styles.root}>
              <Header />
                <Image style={styles.img} source={{ uri: "https://images.unsplash.com/photo-1507736068714-562a1aba9110?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2765df2f4f1c2cb19b23914f45c59a5&auto=format&fit=crop&w=400&q=60"}} />
            <ActionButtons />
            <Meta />
              <View style={styles.commentsWrapper}>
                <TouchableOpacity>
                    <Text style={styles.commentViewAll}>View all 15 comments</Text>
                </TouchableOpacity>
              </View>
            <CommentInput />
                 <View style={styles.timeAgoWrapper}>
                    <Text style={styles.timeAgo}>6 HOURS AGO</Text>
                </View>    
            </View>           
        );
    }

}

export default PhotoCard;