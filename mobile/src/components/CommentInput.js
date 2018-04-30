import React, { Component } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { makeCircle } from '../utils/themes';
import { fakeAvatar } from   '../utils/constants';

const styles = StyleSheet.create ({
    root: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        paddingBottom: 10,
    },
    
    avatar: {
        ...makeCircle(30)
    },
    
    avatarWrapper: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    
    inputWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    inputText: {
        color: "#aaaaaa",
        color: 'white',
        fontWeight: 'bold'

    },
    
    input: {
        borderWidth: 1,
        borderColor: "#aaaaaa",
        borderColor: "#222",
        backgroundColor: "#222",
        alignItems: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '95%',
        borderRadius: 20,
    }
})

class CommentInput extends Component {
    state = { }
    render() {
        return(
            <View style={styles.root}>
                <View style={styles.avatarWrapper}>
                   <Image source={{ uri: fakeAvatar }} style={styles.avatar} />
                </View>
                
                <TouchableOpacity style={styles.inputWrapper}>
                    <View style={styles.input}>
                        <Text style={styles.inputText}>Add a comment</Text>
                    </View>
                </TouchableOpacity>
            
            </View>
        )
    }
}

export default CommentInput;