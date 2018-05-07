import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human, systemWeights} from 'react-native-typography'

import { makeCircle } from '../../utils/themes';
import { fakeAvatar } from '../../utils/constants';



const styles = StyleSheet.create({
    root: {
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        paddingHorizontal: 16
    },
    
    userMetaWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    
    btnWrapper: {
        flex: 0.1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    avatarWrapper: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    avatarImg: {
        ...makeCircle(45)
    },
    
    userInfoWrapper: {
        justifyContent: 'center',
        flex:1,
        paddingLeft: 10
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
    }
    
})

export default function Oldheader({
    avatar = fakeAvatar,
    username = 'Abner Q.',
    location = 'Ottawa, ON'
}) {
    return (
        <View style={styles.root}>
            <View style={styles.userMetaWrapper}>
                <View style={styles.avatarWrapper}>
                 <Image source={{ uri: avatar }} style={styles.avatarImg} />
            </View>
            <View style={styles.userInfoWrapper}>
                <Text style={styles.username}> {username} </Text>
                <Text style={styles.location}> {location} </Text>
            </View> 
        </View>
        
       

        </View>
    ) 
}