import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import { human, systemWeights} from 'react-native-typography';


const styles = StyleSheet.create({
    root: {
        minHeight: 50,
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    
    wrapper: {
        flex: 1,
    },
    
    text: {
        ...human.footnoteObject,  
        ...systemWeights.light,
        color: '#535353'
    },
        
    nameColor: {
        color: '#000000',
        ...systemWeights.bold
    }
})

export default function Meta({
    caption = 'No caption added',
    username = "Abner Q."
}) {
    
    return(
        <View style={styles.root}>
           <View style={styles.wrapper}>
              <Text style={styles.text}><Text style={styles.nameColor}>Elle</Text> and  
                    <Text style={styles.nameColor}> 523 others</Text> dig this fit!</Text>
           </View>
            <View style={styles.wrapper}>
               <Text numberOfLines={4} style={styles.text}>
                <Text style={styles.nameColor}>{username}: </Text> {caption} </Text>
            </View>
        </View>
    )
}