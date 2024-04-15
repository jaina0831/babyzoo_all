import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Raccoon from "../animal/Raccoon";



const RaccoonScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Raccoon/>
    </ScrollView>
  );
};

export default RaccoonScreen;
