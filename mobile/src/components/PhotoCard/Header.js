import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//import Touchable from '@appandflow/touchable';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        flex: 0.2,
        backgroundColor: 'yellow'
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
        color: '#000000'
    },
    
    location: {
        color: '#000000'
    }
    
})

export default function Header() {
    return (
        <View style={styles.root}>
            <View style={styles.userMetaWrapper}>
                <View style={styles.avatarWrapper}>
                 <Image source={{ uri: fakeAvatar }} style={styles.avatarImg} />
            </View>
            <View style={styles.userInfoWrapper}>
                <Text style={styles.username}>Abner Q.</Text>
                <Text style={styles.location}>Ottawa, Canada</Text>
            </View>
        </View>  
        
           //<Touchable feedback="opacity" style={styles.btnWrapper}>
             //   <MaterialCommunityIcons name="dots-horizontal" size={25} />
           //</Touchable>
        </View>
    ) 
}