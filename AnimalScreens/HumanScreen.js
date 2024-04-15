import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Human from "../animal/Human";



const HumanScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Human/>
    </ScrollView>
  );
};

export default HumanScreen;
