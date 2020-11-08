import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }: any) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.tertiary}
          style={styles.icon}
        />
      )}
      <TextInput
        style={[defaultStyles.text, { width: "100%" }]}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
