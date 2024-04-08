import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function TransactionListItem({ itemData }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ paddingTop: 8 }}
      onPress={() => navigation.navigate("TransactionDetails", itemData)}
    >
      <View style={styles.container}>
        <Text>{itemData.transactionName}</Text>
        <View style={styles.rateView}>
          <Text style={styles.textColor}>
            ${itemData?.transactionPrice?.toFixed(2)}
          </Text>
          <Feather name="chevron-right" size={22} color="#3581B8" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  rateView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textColor: { color: "#3581B8" },
});
