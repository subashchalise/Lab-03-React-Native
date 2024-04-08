import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TransactionListItem from "../components/TransactionListItem";

export default function TransactionList({ navigation, financialData }) {
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <FlatList
        data={financialData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionListItem itemData={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddTransacation")}
      >
        <Text style={styles.buttonText}>Add a financial record</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: "#3581B8",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#3581B8",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "center",
    marginBottom: 64,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
