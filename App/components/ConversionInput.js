import React from "react"

import { TouchableOpacity, Text, TextInput, View, StyleSheet } from "react-native"
import colors from "../constants/colors"


const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        borderRadius: 5,
    },
    button: {
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: "bold"
    },
    input: {
        flex: 1,
        padding: 10,
        color: colors.textLight,
    }

})
export const ConversionInput = ({
    text,
    onButtonPress,
    ...props
}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} {...props} />
      </View>
    )
}