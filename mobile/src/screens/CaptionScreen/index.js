import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import { Divider } from '../../components';
import gql from 'graphql-tag';
import { withApollo, graphql } from 'react-apollo';
import LinearGradient from 'react-native-linear-gradient';
import { uploadImageToS3 } from '../../utils/uploadImage';
import { createPhotoMutation } from '../../graphql/mutations';
import { FeedsPhotoFragment } from '../../screens/FeedsScreen/fragments';

const COLORS_GRADIENTS = ['#ff3d78', '#ff7537'];

const signS3Query = gql`
  query {
    presignUrl {
      url
      uploadUrl
    }
  }
`;

const styles = StyleSheet.create({
    root: {
        flex: 1,  
    },
    
    header: {
        height: 350,
        flexDirection: 'row'
    },
    
    imageWrapper: {
        flex: 1,
    },
    
    loadingWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    img: {
        height: '100%',
        width:'100%'
        
    },
    
    captionWrapper: {
        width: '100%',
        borderColor: 'rgba(255, 255, 255, 0)',
        borderBottomColor: '#c4c4c4',
        borderBottomColor: 'rgba(196, 196, 196, 0)',
        borderWidth: 1,
        height: 30
    },
    
    input: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        height: 30,
        flex: 1,
    },
    
    addTags: {
        height: 40,
        width: '100%',
        justifyContent: 'center'
    },
    
    tagsFonts: {
        color: "#FFFFFF",
        paddingLeft: 10,
        alignItems: 'center',
        fontWeight: 'bold'
    }
});

class CaptionScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      loading: false,
    };
      
    props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
  }

 componentDidMount() {
     this.props.navigator.setButtons({
         rightButtons: [
             {
               id: 'sharePost',
               title: 'Upload',  
             },
         ],
         animated: true,
     });
  }


   _onNavigatorEvent = e => {
      if (e.type == 'NavBarButtonPress') {
        if (e.id == 'sharePost') {
          this._onSharePostPress();
          }
        }
      }
    
  _onSharePostPress = async () => {
      this.setState({ loading: true });
      const res = await this.props.client.query({ query: signS3Query });
        const resultFromS3 = await uploadImageToS3(
            this.props.image.node.image.uri,
            res.data.presignUrl,
        );

      
      
   await this.props.onCreatePhoto({
      imageUrl: resultFromS3.remoteUrl,
      caption: this.state.caption,
    });

    this.setState({ loading: false });
    this.props.navigator.dismissModal({
      animationType: 'slide-down',
    });

  };
  
  _onCaptionChange = caption => this.setState({ caption });

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return ( 
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        native={false}>
        <View style={styles.root}>
           <View style={styles.header}>
             <View style={styles.imageWrapper}>
                <Image source={{ uri: this.props.image.node.image.uri }} style={styles.img}/>
             </View>
            </View>
        
            <View style={styles.captionWrapper}>
                <TextInput placeholder="enter a caption..." style={styles.input} multiline value={this.state.caption} 
                onChangeText={this._onCaptionChange} underlineColorAndroid="rgba(0, 0, 0, 0)" />
            </View>

        <TouchableOpacity>
            <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }} colors={COLORS_GRADIENTS} style={styles.addTags}>
                <View>
                    <Text style={styles.tagsFonts}>Add some tags so people can see your style!</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>

    );
  }
}

const getPhotos = gql`
  query {
    photos {
      ...feedsPhoto
    }
  }
  ${FeedsPhotoFragment}`;

export default graphql(createPhotoMutation, {
  props: ({ mutate }) => ({
    onCreatePhoto: variables =>
      mutate({
        variables,
        update: (store, { data: { createPhoto } }) => {
          const query = store.readQuery({ query: getPhotos });
          store.writeData({
            query: getPhotos,
            data: {
              photos: [createPhoto, ...query.photos],
            },
          });
        },
      }),
  }),
})(withApollo(CaptionScreen));