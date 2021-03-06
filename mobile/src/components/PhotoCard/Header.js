import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human, systemWeights} from 'react-native-typography'

import { makeCircle } from '../../utils/themes';
import { fakeAvatar } from '../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';

const COLORS_GRADIENTS = ['#ff3d78', '#ff7537']


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
     //   flexDirection: 'row',
     //   paddingHorizontal: 16
    },
    
    userMetaWrapper: {
        flex: 1,
        borderWidth: 1,
        borderTopColor: '#e0e0e0',
        borderColor: 'transparent',
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
        backgroundColor: "transparent",
        alignItems: 'flex-start',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        width: '95%',
        borderRadius: 40,
    },
   
    lgg: {
        borderRadius: 5
    },
    
    userData: {
        flexDirection: 'row', // display: 'none'
    },
    
    userDataStats: {
        color: '#8b8b8b',
        fontSize: 10,
        fontWeight: 'bold'
    }
    
})

export default function Header({
    avatar = fakeAvatar,
    username = 'TestUser A.',
    location = 'Ottawa, ON',
    posts = '14 Posts',
    followers = '4.6k Followers'
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
                
        
               <View style={styles.userData}>
                    <Text style={styles.userDataStats}> {posts} </Text>
                    <Text style={styles.userDataStats}> {followers} </Text>
                </View>
                <TouchableOpacity style={styles.inputWrapper}>
                 <LinearGradient start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }} colors={COLORS_GRADIENTS} style={styles.lgg}>
                    <View style={styles.input}>
                    <Text style={styles.inputText}>Follow {username}</Text>
                    </View>
        </LinearGradient>
                </TouchableOpacity>
            </View> 
     //   </View>
        
       

        </View>
    ) 
}