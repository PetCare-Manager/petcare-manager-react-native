import React from "react";
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import logo from "@/assets/logo.png";

export const HomeScreen = () => {
  const Logo = () => {
    return (
      <Image
        source={logo}
        resizeMode="contain"
        className=" w-48 h-32 mb-8 object-contain"
      />
    );
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-full px-6">
        <Logo />

        <Text
          className="text-3xl font-bold text-blue-500 mb-8"
          style={{ fontFamily: "AfacadSmibold" }}
        >
          PetCare Manager
        </Text>

        {/* Mensaje de bienvenida */}
        <Text className="text-xl text-gray-600 mb-8">
          Bienvenido a PetCare Manager
        </Text>

        {/* Inputs para registro */}
        <TextInput
          placeholder="Correo electrónico"
          keyboardType="email-address"
          className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          className="border border-gray-300 rounded-lg py-2 px-4 mb-8 w-full"
        />

        {/* Botones de registro */}
        <TouchableOpacity className="bg-blue-500 rounded-lg py-2 px-4 mb-4 w-full items-center justify-center">
          <Text className="text-white">Registrar</Text>
        </TouchableOpacity>

        {/* Botones de redes sociales */}
        <TouchableOpacity className="bg-red-500 rounded-lg py-2 px-4 mb-4 w-full items-center justify-center">
          <Text className="text-white">Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-purple-600 rounded-lg py-2 px-4 mb-4 w-full items-center justify-center">
          <Text className="text-white">Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-400 rounded-lg py-2 px-4 w-full items-center justify-center">
          <Text className="text-white">X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
