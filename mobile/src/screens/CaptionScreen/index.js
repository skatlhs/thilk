import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Divider } from '../../components'
import LinearGradient from 'react-native-linear-gradient';

const COLORS_GRADIENTS = ['#ff3d78', '#ff7537'];

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
  state = {
    caption: '',
  };

  _onCaptionChange = caption => this.setState({ caption });

  render() {
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

export default CaptionScreen;