import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human, systemWeights} from 'react-native-typography'

import { makeCircle } from '../../utils/themes';
import { fakeAvatar } from '../../utils/constants';



const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
     //   flexDirection: 'row',
        paddingHorizontal: 16
    },
    
    userMetaWrapper: {
        flex: 1,
     //   flexDirection: 'row'
    },
    
    btnWrapper: {
        flex: 0.1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    avatarWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:15
    },
    
    avatarImg: {
        ...makeCircle(45)
    },
    
    userInfoWrapper: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
     //   paddingLeft: 10
    },
    
    username: {
        ...human.subheadObject
    },
    
    location: {
       ...human.footnoteObject,
       ...systemWeights.light
    },
    
    btnPosition: {
        justifyContent: 'center',
        paddingTop:15
    },
    
    inputWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:5,
        paddingBottom:15
    },
    
    inputText: {
        color: "#aaaaaa",
        color: 'white',
        fontWeight: 'bold'

    },
    
    input: {
        backgroundColor: "#009b95",
        alignItems: 'flex-start',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '95%',
        borderRadius: 4,
    }
    
})

export default function Header({
    avatar = fakeAvatar,
    username = 'Abner Q.',
    location = 'Ottawa, ON'
}) {
    return (
        <View style={styles.root}>
          //  <View style={styles.userMetaWrapper}>
                <View style={styles.avatarWrapper}>
                 <Image source={{ uri: avatar }} style={styles.avatarImg} />
            </View>
            <View style={styles.userInfoWrapper}>
                <Text style={styles.username}> {username} </Text>
                <Text style={styles.location}> {location} </Text>
                
                <TouchableOpacity style={styles.inputWrapper}>
                    <View style={styles.input}>
                        <Text style={styles.inputText}>Follow {username}</Text>
                    </View>
                </TouchableOpacity>
            </View> 
     //   </View>
        
       

        </View>
    ) 
}