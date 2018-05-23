import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { graphql } from 'react-apollo';
import { defaultDataIdFromObject } from 'apollo-cache-inmemory';
import Header from './Header';
import ActionButtons from './ActionButtons';
import Meta from './Meta';
import CommentInput from '../CommentInput';
import { likePhotoMutation } from '../../graphql/mutations';
import { FeedsPhotoFragment } from '../../screens/FeedsScreen/fragments';

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

  _onLikedPress = () => {
      this.props.onLikePhotoMutation()
  };


  _goToComment = () => {
    this.props.navigator.push({
      screen: 'thilk.CommentsScreen',
      title: 'Comments',
      passProps: {
        photoId: this.props.data.id,
      },
      navigatorStyle: {
         tabBarHidden: true,
        },
    });
  };

    render() {
        return (
            <View style={styles.root}>
              <Header />
                <Image style={styles.img} source={{ uri: this.props.data.imageUrl }} />
            <ActionButtons viewerLike={this.props.data.viewerLike} onLikedPress={this._onLikedPress} />
            <Meta caption={this.props.data.caption}/>
              <View style={styles.commentsWrapper}>
                <TouchableOpacity onPress={this._goToComment} >
                    <Text style={styles.commentViewAll}>View all 15 comments</Text>
                </TouchableOpacity>
              </View>
                <CommentInput photoId={this.props.data.id} navigator={this.props.navigator} />
                 <View style={styles.timeAgoWrapper}>
                    <Text style={styles.timeAgo}>6 HOURS AGO</Text>
                </View>    
            </View>           
        );
    }

}

export default graphql(likePhotoMutation, { 
    props: ({ mutate, ownProps }) => ({
        onLikePhotoMutation: () => mutate({ 
            variables: { photoId: ownProps.data.id }, 
            update: (store, { data: { likePhoto } }) => {
              const id = defaultDataIdFromObject ({
                  __typename: 'Photo',
                  id: ownProps.data.id
              })
              
              const photo = store.readFragment({
                  id,
                  fragment: FeedsPhotoFragment
              });
              
              store.writeFragment({
                  id, 
                  fragment: FeedsPhotoFragment,
                  data: {
                      ...photo,
                      viewerLike: likePhoto
                  }
              })
              console.log('=================');
              console.log('photo', photo);
              console.log('=================');
              
            },
        }),
    }),
    })(PhotoCard);
