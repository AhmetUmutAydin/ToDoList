import React from "react";
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    //touchableHighlight,touchablewithoutfeedback
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this,props.item.key)} activeOpacity={0.8}>
      <View style={styles.listItem}>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
