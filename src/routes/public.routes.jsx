import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Collections from "../screens/Collections";
import Details from "../screens/Details";
import Config from "../screens/Config";

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="collections" component={Collections} />
      <Screen name="details" component={Details} />
      {/* <Screen name="config" component={Config} /> */}
    </Navigator>
  );
}
