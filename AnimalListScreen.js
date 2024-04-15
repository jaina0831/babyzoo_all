import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import AnimalList from "../component/AnimalList";


const AnimalListScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF2C5' }}>
      <Center>
    
      </Center>
      
      <AnimalList navigation={navigation}/>

    </ScrollView>
  );
};

export default AnimalListScreen;