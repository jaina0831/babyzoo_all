import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Otter from "../animal/Otter";



const OtterScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Otter/>
    </ScrollView>
  );
};

export default OtterScreen;
