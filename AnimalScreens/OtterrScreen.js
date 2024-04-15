import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Otterr from "../animal/Otterr";



const OtterrScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Otterr/>
    </ScrollView>
  );
};

export default OtterrScreen;
