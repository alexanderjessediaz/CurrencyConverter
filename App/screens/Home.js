import React from "react";

import {StyleSheet, View, StatusBar, Image, Dimensions, Text} from 'react-native'
import {format} from 'date-fns'

import { ConversionInput } from "../components/ConversionInput";
import colors from '../constants/colors'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.blue,
      justifyContent: 'center'
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    logoBackground: {
      width: screen.width / 0.45,
      height: screen.height * 0.45,
    },
    logo:{
      position: 'absolute',
      width: screen.width * 0.25,
      height: screen.height * 0.25,
    },
    textHeader: {
      color: colors.white,
      fontWeight: 'bold',
      fontSize: 30,
      marginVertical: 20,
      textAlign: 'center'
    },
    text: {
      color: colors.white,
      fontSize: 13,
      textAlign: 'center'
    }
})

export default () => {
  const baseCurrency = 'USD'
  const quoteCurrency = 'GBP'
  const date = new Date()
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.blue} />

        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/background.png')}
            style={styles.logoBackground}
            resizeMode='contain'
          />
          <Image 
            source={require('../assets/images/logo.png')} 
            style={styles.logo}
            resizeMode='contain'
          />
        </View>

        <ConversionInput 
          text={baseCurrency}
          value="123"
          onButtonPress={() => alert('todo!')}
          onChangeText={text => console.log('text', text)}
          keyboardType="numeric"
        />
        <ConversionInput 
          text={quoteCurrency}
          value="123"
          onButtonPress={() => alert('todo!')}
          editable={false}
        />
        <Text style={styles.text}>
          {`1 ${baseCurrency}= x of ${quoteCurrency} as of ${format(date, 'MMMM, dd, yyyy')}`}
        </Text>
      </View>
    )
}