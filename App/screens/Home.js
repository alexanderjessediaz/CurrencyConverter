import React from "react";

import {StyleSheet, View, StatusBar} from 'react-native'

import colors from '../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
    },
})

export default () => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />
      </View>
    )
}