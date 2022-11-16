import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/Home/HomeScreen";
import { registerRootComponent } from "expo";
import SelectorScreen from "./Components/Selector/SelectorScreen";
import ImageScreen from "./Components/ImageSelector/ImageScreen";
import CameraComponent from "./Components/ImageSelector/CameraComponent";

const Stack = createNativeStackNavigator();

export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SelectorScreen" component={SelectorScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CameraComponent" component={CameraComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

registerRootComponent(Navigator);
