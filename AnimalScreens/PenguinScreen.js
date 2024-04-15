import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Penguin from "../animal/Penguin";



const PenguinScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Penguin/>
    </ScrollView>
  );
};

export default PenguinScreen;
