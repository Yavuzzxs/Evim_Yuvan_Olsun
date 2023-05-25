import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from "../styles";
import { ScrollView } from 'react-native-gesture-handler';

export default function Afad_House() {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationName, setDonationName] = useState('');
  const [donationCardNo, setDonationCardNo] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCvv] = useState('');


  return (
    <ScrollView>
      <View>
        <Image style={[styles.image_afad, { backgroundColor: 'darkblue' }]}
          source={{ uri: 'https://kira.afadyardimmarket.gov.tr/assets/images/page-images/afad-yardim-market.png' }}
        />
      </View>
      <View style={{ flex: 1, padding: 50, backgroundColor: 'white' }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bağış Yap</Text>

        <Text style={{ fontSize: 16, marginVertical: 10 }}>Bağış Tutarı:</Text>
        <TextInput
          style={{ borderWidth: 1, backgroundColor: 'white', borderColor: 'gray', borderRadius: 5, height: 40, paddingHorizontal: 10 }}
          value={donationAmount}
          onChangeText={(text) => setDonationAmount(text)}
          keyboardType="numeric"
        />
        <Text style={{ fontSize: 16, marginVertical: 10 }}>Kart Üzerindeki Ad Soyad:</Text>
        <TextInput
          style={{ borderWidth: 1, backgroundColor: 'white', borderColor: 'gray', borderRadius: 5, height: 40, paddingHorizontal: 10 }}
          value={donationName}

          onChangeText={(text) => setDonationName(text)}
        />
        <Text style={{ fontSize: 16, marginVertical: 10 }}>Kart Numarası:</Text>
        <TextInput
          keyboardType='phone-pad'
          style={{ borderWidth: 1, backgroundColor: 'white', borderColor: 'gray', borderRadius: 5, height: 40, paddingHorizontal: 10 }}
          value={donationCardNo}
          onChangeText={(text) => setDonationCardNo(text)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, }}>
          <TextInput style={styles.Afad_House_Text2} placeholder="Ay"
            value={month}
            onChangeText={txt => setMonth(txt)}
          />
          <TextInput style={styles.Afad_House_Text2} placeholder="Yıl"
            value={year}
            onChangeText={txt => setYear(txt)}
          />
          <TextInput style={styles.Afad_House_Text2} placeholder="CVV"
            value={cvv}
            onChangeText={txt => setCvv(txt)}
          />
        </View>
        <TouchableOpacity style={styles.Afad_House_Button}>
          <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
          <Text style={{color:'white',fontSize: 20}}> Bağış Yap </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
};
