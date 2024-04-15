import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Unicorn from "../animal/Unicorn";



const UnicornScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Unicorn/>
    </ScrollView>
  );
};

export default UnicornScreen;
