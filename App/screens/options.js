import React from "react";

import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native'
import colors from '../constants/colors'


const styles = StyleSheet.create({
    row: {
        paddingVertical:16,
        paddingHorizontal:20
    },
    text: {
        fontSize:16,
        color: colors.text
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }

})
export default () => {
    return (
      <SafeAreaView>
        <TouchableOpacity style={styles.row}>
          <Text styles={styles.text}>Themes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text styles={styles.text}>React Native Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text styles={styles.text}>React Native by Example</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}