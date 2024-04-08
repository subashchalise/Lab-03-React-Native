import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetail from "./pages/TransactionDetail";
import TransactionList from "./pages/TransactionList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Summary from "./pages/Summary";
import { db } from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import AddTransactionScreen from "./pages/AddTransaction";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Route() {
  const [financialData, setFinancialData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "financialData"), (snapshot) => {
      if (snapshot.docs.length > 0) {
        const data = [];
        snapshot.docs.forEach((i) => data.push(i.data()));
        setFinancialData(data);
      }
    });

    return () => unsub();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTintColor: "white",
          tabBarActiveTintColor: "#3581B8",
          headerStyle: {
            backgroundColor: "#3581B8",
          },
        }}
      >
        <Tab.Screen
          name="AppStack"
          options={{
            header: () => null,
            title: "Transactions",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="file-document"
                size={size}
                color={color}
              />
            ),
          }}
        >
          {(props) => <AppStack {...props} financialData={financialData} />}
        </Tab.Screen>
        <Tab.Screen
          name="Summary"
          options={{
            title: "Summary",
            headerTitle: "Summary",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        >
          {(props) => <Summary financialData={financialData} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function AppStack({ financialData }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3581B8",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="TransactionList"
        options={{
          headerTitle: "Transactions List",
        }}
      >
        {(props) => (
          <TransactionList {...props} financialData={financialData} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetail}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Transactions Details",
        }}
      />
      <Stack.Screen 
      name="AddTransacation"
      component={AddTransactionScreen}
      options={{
        headerBackTitle: "Back",
        headerTitle: "Add a financial record",
      }}
      />
    </Stack.Navigator>
  );
}
