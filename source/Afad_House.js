import React from "react"
import {View, StyleSheet, ImageBackground,Text,TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles";

const Afad_House = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.Main_View}>
                <TouchableOpacity style={styles.ButtonEnter} onPress={() => navigation.navigate("Rent_House")}>
                    <Text>
                        Afad 
                    </Text>
                </TouchableOpacity>

        </View>
    )
}


export default Afad_House