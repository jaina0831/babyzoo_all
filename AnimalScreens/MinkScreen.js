import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Mink from "../animal/Mink";



const MinkScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Mink/>
    </ScrollView>
  );
};

export default MinkScreen;
