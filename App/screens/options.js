import React from "react";

import { TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import colors from '../constants/colors'


const styles = StyleSheet.create({
    row: {
        paddingVertical:16,
        paddingHorizontal:20,
        flexDirection: 'row',
        justifyContent: "space-between"
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
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text styles={styles.text}>React Native Basics</Text>
          <Entypo name="export" size={20} color={colors.blue} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text styles={styles.text}>React Native by Example</Text>
          <Entypo name="export" size={20} color={colors.blue} />
        </TouchableOpacity>
      </SafeAreaView>
    )
}