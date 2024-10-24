import React from "react";
import { Image, Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
<<<<<<< HEAD
import { Layout } from "@ui-kitten/components";
import { BottomTabs } from "./BottomTabs";
=======
>>>>>>> parent of 6228a6f (installing ui kitten components)

export const UserProfile = () => {
    return (
        <View>
            <View>
                <Text className="font-afacad-semibold text-3xl text-center text-gray-800">
                    Navbar. Menú: añadir mascota, añadir evento
                </Text>
            </View>
            <View className="flex justify-center m-5 items-center" >
                <FontAwesome6 name="person" size={50} color="black" />
            </View>
            <Text className="font-afacad-semibold text-3xl text-center text-gray-800 mb-8">
                ¡Hola, -Name-! Disfruta tu día
            </Text>
            <View>
                <Text className="font-afacad-semibold text-3xl text-center text-gray-800 mb-8">
                    PetCards x2
                </Text>
            </View>
            <View>
                <Text className="font-afacad-semibold text-xl ml-2 text-start text-gray-800 mb-8">
                    Próximos eventos del mes:
                </Text>
                <Text className="font-afacad-semibold text-3xl text-center text-gray-800 mb-8">
                    PetEvents x3
                </Text>
<<<<<<< HEAD
                <Layout>
                    <BottomTabs />
                </Layout>
=======
>>>>>>> parent of 6228a6f (installing ui kitten components)
            </View>
        </View>
    );
};