

import { FontAwesome5 } from '@expo/vector-icons';

import { useNavigation, useRoute } from "@react-navigation/native";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config';

import React, { useState, useEffect } from "react"
import { View, Checkbox, StyleSheet, Image, Text, Linking, TouchableOpacity, FlatList, TextInput, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { styles } from "../styles";

const Pay_House = () => {

  const navigation = useNavigation()
  const goToLocation = (item) => {
    const { il, ilce, adres } = item;
    const address = `${il}+${ilce}+${adres}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(url);
  };


  const [evler, setEvler] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Evler'), (snapshot) => {
      const evler = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvler(evler);
    });
    return unsubscribe;
  }, []);

  return (

    < View style={{ marginTop: '10%', marginBottom: '20%' }
    }>
      <SvgUri
        style={{ marginBottom: '5%', backgroundColor: '#f4f4f4' }}
        width="100%"
        height="10%"
        uri="https://s0.shbdn.com/assets/blob/icisleri-afad-logo:8126635244752126e7fdfd9455591f09.svg"
      />
      <FlatList
        data={evler}
        renderItem={({ item }) => (
          <View style={styles.payHouse}>
            <View style={styles.row}>
              <View style={styles.priceContainer}>
                <FontAwesome5 name="money-bill" size={24} color="green" />
                <Text style={[styles.info, styles.price]}> {item.fiyat} TL/AY</Text>
              </View>
              <View style={styles.peopleContainer}>
                <FontAwesome5 name="users" size={24} color="grey" />
                <Text style={[styles.info, styles.people]}>  {item.insansayisi}</Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome5 name="map-marker-alt" size={24} />
                <Text style={[styles.info, styles.location]}>{item.il} - {item.ilce}</Text>
                <TouchableOpacity style={styles.button2} onPress={() => goToLocation(item)}>
                  <Text style={styles.buttonText}>Konuma Git</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={[styles.info2, styles.availability]}>Müsaitlik Süresi: {item.müsaitlikdurumu} AY </Text>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}
                  onPress={() => {
                    navigation.navigate('Afad_House');
                  }}
                  >Bağış Yap</Text>
              </TouchableOpacity>
            </View>
          </View>

        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View >
  )
}


export default Pay_House