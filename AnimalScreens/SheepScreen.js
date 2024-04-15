import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Sheep from "../animal/Sheep";



const SheepScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Sheep/>
    </ScrollView>
  );
};

export default SheepScreen;