import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { HomeScreen } from '@/components/HomeScreen';

export default function Home() {
  return (
    <View className="flex-1">
      <HomeScreen /> 
    </View>
  );
}