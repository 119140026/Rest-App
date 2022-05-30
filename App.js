import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import desc from './layar/desc';
import home from './layar/home';

import { Provider } from 'react-redux';
import { Store } from './redux/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="home" component={home} />
          <Stack.Screen name="desc" component={desc} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
      
   
  );
};

export default App;

