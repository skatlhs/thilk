import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../utils/themes'
const styles = StyleSheet.create({
   root: {
       width:'100%',
       height: 1,
       backgroundColor: colors._lightgrey,
       marginVertical: 5
   },
});

export default function Divider() {
    return <View style={styles.root} />;
}