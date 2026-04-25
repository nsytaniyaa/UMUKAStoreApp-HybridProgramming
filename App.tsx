import React from 'react';
import { View } from 'react-native'; // 1. Tambahkan import View
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // 2. Bungkus dengan View flex: 1 agar di Web bisa scroll
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'UMUKA Store' }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: 'Detail Produk' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}