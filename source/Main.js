import React from "react"
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles";

const Main = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={[styles.image,{backgroundColor:'firebrick'}]}
                    source={{ uri: 'https://www.isay.gov.tr/kurumlar/evimyuvanolsun.org/img/logoBuyuk.png' }}
                />
            </View>
            <View style={styles.Main_View}>
                <TouchableOpacity style={styles.Main_Buttons} onPress={() => navigation.navigate("Let_House")}>
                    <Text style={styles.Main_Texts}>
                        Evimi bedelsiz / uygun bedelle kiraya vermek istiyorum *
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Main_Buttons} onPress={() => navigation.navigate("Pay_House")}>
                    <Text style={styles.Main_Texts}>
                        Depremzedelerin oturacağı evlerin kira bedellerini karşılamak istiyorum
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Main_Buttons} onPress={() => navigation.navigate("Afad_House")}>
                    <Text style={styles.Main_Texts}>
                        Depremzedeler için AFAD'a kira bağışında bulunmak istiyorum
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Main_Buttons} onPress={() => navigation.navigate("Rent_House")}>
                    <Text style={styles.Main_Texts}>
                        Depremzede olarak gönüllü konut konaklama başvurusunda bulunmak istiyorum
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}


export default Main