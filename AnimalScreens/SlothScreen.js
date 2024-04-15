import React from "react";
import { ScrollView,Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import Sloth from "../animal/Sloth";



const SlothScreen = ({ }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#B1D9DE'}}>
      <Sloth/>
    </ScrollView>
  );
};

export default SlothScreen;