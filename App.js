// In App.js in a new project

import React,  { useState, useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
// import { auth } from "./Firebase";

GoogleSignin.configure({
  webClientId: '773206829548-g5ec8dn173ceophuv3a8op4nj92sn6o6.apps.googleusercontent.com',
  
});

function LogInScreen({navigation}) {

  const  onGoogleButtonPress = async() => {
    //Get the users ID token
   const { idToken } = await GoogleSignin.signIn();
   console.log("Warren",idToken )
  //   // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  //   // Sign-in the user with the credential
return auth().signInWithCredential(googleCredential);
  //
 }
 
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Biim Ching Screen</Text>
      <Button
        title="Google"
        onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
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
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate("HomeDetails")}
        
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
  const [initializing, setInitializing] = useState(true);
  //const [user, setUser] = useState();
  const user = null
   // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  console.log("User", user)
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
