import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//});
