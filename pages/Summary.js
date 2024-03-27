import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { financialData } from "../financialData";

const ListItem = ({ price, title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text style={styles.priceColor}>{price}</Text>
    </View>
  );
};

export default function SummaryPage() {
  const totalNumberOfTransactions = financialData.length;

  let totalBalance = 0;
  for (const transaction of financialData) {
    totalBalance += transaction.transactionPrice;
  }

  const transactionPrices = financialData.map(
    (transaction) => transaction.transactionPrice
  );

  let highestSpendingPrice = -Infinity;
  for (const price of transactionPrices) {
    if (price > highestSpendingPrice) {
      highestSpendingPrice = price;
    }
  }

  let lowestSpendingPrice = Infinity;
  for (const price of transactionPrices) {
    if (price < lowestSpendingPrice) {
      lowestSpendingPrice = price;
    }
  }

  let highestSpendingTransaction;
  for (const transaction of financialData) {
    if (transaction.transactionPrice === highestSpendingPrice) {
      highestSpendingTransaction = transaction;
      break;
    }
  }

  let lowestSpendingTransaction;
  for (const transaction of financialData) {
    if (transaction.transactionPrice === lowestSpendingPrice) {
      lowestSpendingTransaction = transaction;
      break;
    }
  }

  const highestSpending = highestSpendingTransaction.transactionPrice;
  const lowestSpending = lowestSpendingTransaction.transactionPrice;

  const highestSpendingName = highestSpendingTransaction.transactionName;
  const lowestSpendingName = lowestSpendingTransaction.transactionName;
  return (
    <View>
      <ListItem title="Transactions" price={totalNumberOfTransactions} />
      <ListItem title="Balance" price={"$" + totalBalance.toFixed(2)} />
      <Text style={styles.title}>High Spending</Text>
      <ListItem
        title={highestSpendingName}
        price={"$" + highestSpending.toFixed(2)}
      />
      <Text style={styles.title}>Low Spending</Text>
      <ListItem
        title={lowestSpendingName}
        price={"$" + lowestSpending.toFixed(2)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    paddingHorizontal: 16,
    color: "#3581B8",
    fontWeight: "bold",
    marginTop: 4,
  },
  container: {
    flexDirection: "row",
    borderBottomWidth: 1.5,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderColor: "#3581B8",
    paddingVertical: 8,
  },
  priceColor: { color: "grey" },
});
