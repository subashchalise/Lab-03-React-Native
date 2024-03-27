import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TransactionDetail = ({ route }) => {
  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.priceText}>
          ${route.params.transactionPrice.toFixed(2)}
        </Text>
        <Text style={styles.transactionNameText}>
          {route.params.transactionName}
        </Text>
        <Text style={styles.transactionLocationText}>
          {route.params.transactionLocation}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Transaction Date</Text>
        <Text>{route.params.transactionDate}</Text>
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  main: {
    paddingVertical: 36,
    backgroundColor: "#3581B8",
  },
  transactionNameText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  priceText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  transactionLocationText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
    color: "white",
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },
});
