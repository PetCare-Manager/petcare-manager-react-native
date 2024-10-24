import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import logo from "@/assets/images/logo.png";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Bubble } from "@/components/Bubbles";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white justify-between items-center">
      <Image source={logo} className="w-68 h-52 mt-28 z-10" />
      
      
      <Bubble containerClass="absolute top-0 right-0 z-0" type="bubble1" />
      <Bubble containerClass="absolute -top-20 -left-16 z-0" type="bubble2" rotation={-45} />
      <Bubble type="bubble3" />
      <Bubble type="bubble4" />
      <Bubble type="bubble5" />


      <View className="items-center">
        <View className="w-full px-10">
          <Text className="font-afacad-semibold text-4xl text-center text-slate-600 mb-8">
            PetCare Manager
          </Text>

          <Text className="font-raleway-light text-xl text-center text-gray-800">
            Todo lo que necesitas de tu mascota, en tu bolsillo, a un solo
            click.
          </Text>
        </View>
      </View>
      {/* Contenedor para los botones en la parte inferior */}
      <View className="w-full">
        <View className="flex-row justify-between mb-10 mx-12">
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className="bg-white rounded-lg w-32 h-12 border border-indigo-500 py-2 px-4 items-center justify-center"
          >
            <Text className="text-indigo-500 font-raleway-regular">
              Registro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-indigo-500 w-32 h-12 rounded-lg py-2 px-4 items-center justify-center"
          >
            <Text className="text-white font-raleway-regular">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
