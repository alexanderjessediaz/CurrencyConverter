import React from "react";

import {SafeAreaView, ScrollView } from 'react-native'
import {Entypo} from '@expo/vector-icons'

import {RowItem, RowSeperator } from "../components/RowItem";
import colors from '../constants/colors'



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
            onPress={() => alert("todo!")}
          />
          <RowSeperator />
          <RowItem 
            rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
            text="React Native by Example"
            onPress={() => alert("todo!")}
          />
          <RowSeperator />
        </ScrollView>
      </SafeAreaView>
    )
}