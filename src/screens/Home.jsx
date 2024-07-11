import ProductItem from "../components/ProductItem";
import React from "react";
import Separator from "../components/Separator";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { PRODUCTS_LIST } from "../data/constants";

const Home = ({navigation}) => {
  return (
    <View style = {styles.container} >
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
      renderItem={({item})=> (
       <Pressable
       onPress={ ()=>{
        navigation.navigate('Details',{
          product : item,
        })
       } }

       >

        <ProductItem product={item} />
       </Pressable>
      )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'flex-start',
    padding : 12,
    backgroundColor : '#ffffff'
  }
})

export default Home
