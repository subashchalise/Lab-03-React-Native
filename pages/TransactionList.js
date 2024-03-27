import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import TransactionListItem from "../components/TransactionListItem";
import { financialData } from "../financialData";

export default function TransactionList() {
  return (
    <FlatList
      data={financialData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TransactionListItem itemData={item} />}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "#3581B8",
    marginVertical: 8,
  },
});
