import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Capybara from "../animal/Capybara";



const CapybaraScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Capybara/>
    </ScrollView>
  );
};

export default CapybaraScreen;
