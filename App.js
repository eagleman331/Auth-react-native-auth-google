// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Biim Ching Screen</Text>
      <Button
        title="Press Me"
        onPress={() => {
          navigation.navigate('HomeDetails');
        }}
      />
    </View>
  );
}

function TestScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Zeb Ching Screen</Text>
    </View>
  );
}
function LogInScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Warren Ching Screen</Text>
      <Button
        title="Log In"
        onPress={() => console.log("press Test")}
        
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const HomeStackNav = createNativeStackNavigator();

function HomeStack() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="FrontHome" component={HomeScreen} />
      <HomeStackNav.Screen name="HomeDetails" component={TestScreen} />
    </HomeStackNav.Navigator>
  );
}

function App() {
  const user = "Warren"
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeStack} />
        ) : (
          <Stack.Screen name="LogIn" component={LogInScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
