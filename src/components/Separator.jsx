import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Separator = () => {
  return (
    <View style = {styles.separator} >
      
    </View>
  )
}

export default Separator

const styles = StyleSheet.create({
    separator : {
        height : 1,
        backgroundColor : 'grey'
    }
})