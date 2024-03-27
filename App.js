import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetail from "./pages/TransactionDetail";
import TransactionList from "./pages/TransactionList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Summary from "./pages/Summary";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Route() {
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
          component={AppStack}
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
        />
        <Tab.Screen
          name="Summary"
          component={Summary}
          options={{
            title: "Summary",
            headerTitle: "Summary",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function AppStack() {
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
        component={TransactionList}
        options={{
          headerTitle: "Transactions List",
        }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetail}
        options={{
          headerBackTitle: "Back",
          headerTitle: "Transactions Details",
        }}
      />
    </Stack.Navigator>
  );
}
