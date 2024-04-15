import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Fox from "../animal/Fox";



const FoxScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Fox/>
    </ScrollView>
  );
};

export default FoxScreen;
