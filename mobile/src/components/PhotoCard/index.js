import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';

import Header from './Header';
import ActionButtons from './ActionButtons';
import Meta from './Meta';
import CommentInput from '../CommentInput';
import { likePhoto } from '../../graphql/mutations';

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
  state = {};

  _onLikedPress = async () => {
    console.log('====================================');
    console.log('you like me');
    console.log('====================================');

    try {
      const res = await this.props.likePhotoMutation({
        variables: {
          photoId: this.props.data.id,
        },
      });
      console.log('====================================');
      console.log('res', res);
      console.log('====================================');
    } catch (error) {
      console.log('====================================');
      console.log('error:', error);
      console.log('====================================');
    }
  };
    render() {
        return (
            <View style={styles.root}>
              <Header />
                <Image style={styles.img} source={{ uri: this.props.data.imageUrl }} />
            <ActionButtons onLikedPress={this._onLikedPress} />
            <Meta caption={this.props.data.caption}/>
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

export default graphql(likePhoto, { name: 'likePhotoMutation' })(PhotoCard);