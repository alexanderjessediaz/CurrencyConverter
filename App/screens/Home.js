import React, {useState} from "react";

import {StyleSheet, View, StatusBar, Image, Dimensions, Text, ScrollView} from 'react-native'
import {format} from 'date-fns'

import { ConversionInput } from "../components/ConversionInput";
import { Button } from '../components/Button'
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import colors from '../constants/colors'

const screen = Dimensions.get('window')


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.blue,
    },
    content: {
      paddingTop: screen.height *0.2
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
    },
    inputContainer: {
      marginBottom: 10,
    },
})

export default () => {
  const baseCurrency = 'USD'
  const quoteCurrency = 'GBP'
  // const conversionRate = 0.89824;
  const date = '2020-03-23';

  const [scrollEnabled, setScrollEnabled] = useState(false)

  
    return (
      <View style={styles.container}>
        <ScrollView scrollEnabled={scrollEnabled}>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          <View style={styles.content}>
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
            <Text style={styles.textHeader}>Currency Converter</Text>
            <View style={styles.inputContainer}>
              <ConversionInput 
                text={baseCurrency}
                value="123"
                onButtonPress={() => alert('todo!')}
                keyboardType="numeric"
                onChangeText={text => console.log('text', text)}
              />
              <ConversionInput 
                text={quoteCurrency}
                value="123"
                editable={false}
                onButtonPress={() => alert('todo!')}
              />
            </View>
            <Text style={styles.text}>
              {`1 ${baseCurrency}= x of ${quoteCurrency} as of  ${format(
              new Date(date),
              'MMM do, yyyy'
            )}`}
            </Text>

            <Button text='reverse currencies' onPress={() => alert('todo!')} />

            <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
          </View>
        </ScrollView>
      </View>
    )
}