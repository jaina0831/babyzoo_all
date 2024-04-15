import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Bear from "../animal/Bear";



const BearScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Bear/>
    </ScrollView>
  );
};

export default BearScreen;