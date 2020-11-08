import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const buttonSize = 70;

const AppButon = ({
  onPress,
  color = "tertiary",
  iconName,
  colorIcon = "black",
}: any) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={[styles.buttonContour, { backgroundColor: colors[color] }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={35}
          color={colors[colorIcon]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContour: {
    backgroundColor: colors.primary,
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default AppButon;
