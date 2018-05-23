import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { makeCircle, centerElement } from '../../utils/themes';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const styles = StyleSheet.create({
   root: {
       minHeight: 70,
   },
    
    commentCard: {
        flexDirection: 'row',  
        minHeight: 70,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    
    },
    
    avatarWrapper: {
        flex: 0.3,
        ...centerElement, 
    },
    
    contentWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    
    buttonWrapper: {
        flex: 0.2,
    },
    
    userAv: {
      //  height: '100%',
    //    width: '100%',
        ...makeCircle(40)
    },
        
    imageH: {
        flex: 1,
        height: 500,
        borderColor: 'red',
        borderWidth: 2,
        flexDirection: 'row'
    },
    
    heartStyle: {
        flex: 1,
        ...centerElement,      
    },
        
    heartIcon: {
        
    },
    
    date: {
        color: '#00000080',
        fontSize: 10,
    },
        
    userName: {
        fontWeight: 'bold',
        color: '#000000'
    },
        
    commentText: {
        color: '#959595',
        paddingLeft: 10,
        fontWeight: '100'
    },
        
    lineText: {
        flexDirection: 'row',
    }
});

class Comment extends PureComponent {
  state = {};
  render() {
    const { user, text, insertedAt } = this.props;
    return (
      <View style={styles.root}>
      <View style={styles.commentCard}>
        <View style={styles.avatarWrapper}>
            <Image style={styles.userAv} source={{ uri: this.props.user.avatar }} />
        </View>
        
        <View style={styles.contentWrapper}>
               <Text style={styles.userName}>{user.username}
               <Text style={styles.commentText}> {text}</Text></Text>
      
            <View>
               <Text style={styles.date}>{distanceInWordsToNow(insertedAt)} ago</Text>
            </View>                         
        </View>
       
        
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.heartStyle}>
                <Ionicons name="md-heart-outline" size={30} style={styles.heartIcons} />
            </TouchableOpacity>
        </View>
        </View>

      </View>

    );
  }
}


export default Comment;