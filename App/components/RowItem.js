import React from "react";

import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
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

export const RowItem = ({rightIcon, text, onPress}) => {
    return (
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text styles={styles.text}>{text}</Text>
        {rightIcon}
      </TouchableOpacity>
    )
}

export const RowSeperator = () => <View style={styles.separator} />