import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
