import React from "react";

import {SafeAreaView, ScrollView, Linking, Alert } from 'react-native'
import {Entypo} from '@expo/vector-icons'

import {RowItem, RowSeperator } from "../components/RowItem";
import colors from '../constants/colors'

const openLink = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('Bad Link passed', 'for some unknown reason a bad link was sent')
  })
}

export default () => {
    return (
      <SafeAreaView style={{ flex:1 }}>
        <ScrollView>
          <RowItem 
            rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue} />}
            text="Themes"
            onPress={() => alert("todo!")}
          />  
          <RowSeperator />
          <RowItem 
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
            text="React Native Basics"
            onPress={() => openLink("https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter")}
          />
          <RowSeperator />
          <RowItem 
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
            text="React Native by Example"
            onPress={() => openLink("https://reactnativebyexample.com")}
          />
          <RowSeperator />
        </ScrollView>
      </SafeAreaView>
    )
}


