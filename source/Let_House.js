import { getAuth, onAuthStateChanged } from "firebase/auth"
import { collection, query, where, onSnapshot, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from '../config';
import { uuidv4 } from '@firebase/util';

import React, { useState } from "react"
import { View, Checkbox, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { RadioButton, Menu, Button, Provider, List, Modal } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native"
import { SvgUri } from 'react-native-svg';

import { styles } from "../styles";

import DateTimePickerModal from "react-native-modal-datetime-picker";


import cities from '../city'

const Let_House = () => {

  const set = async () => {
    alert("Başarıyla ayarlandı")
    const uid = uuidv4()

    await setDoc(doc(db, "Evler", uid), {

      ad: firstname,
      soyad: surname,
      il: city,
      ilce: county,
      adres: address,
      telefon: phone,
      email: email,
      bedel: group1,
      destekkişi: group2,
      konuttipi: group3,
      esyadurumu: group4,
      kimlikno: identity,
      insansayisi: people,
      müsaitlikdurumu: selectedItemMüsait,
      aciklama: explanation,
      evyas: selectedItemAge,
      evoda: selectedItemRoom,
      fiyat: price,


      baslangictarihi: selectedDate,



    });
  }



  const navigation = useNavigation()
  const handlePhoneNumberChange = (txt) => {
    if (/^\d+$/.test(txt)) {
      setPhone(txt);
    }
  }
  const handleIdentityChange = (txt) => {
    if (/^\d+$/.test(txt)) {
      setIdentity(txt);
    }
  }
  const menuItems_Age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  const handleMenuItemPressAge = (key) => {
    setSelectedItemAge(key.toString());
    setVisible_Age(false);
  };

  const menuItems_Müsaitlik = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleMenuItemPressMüsait = (key) => {
    setSelectedItemMüsait(key.toString());
    setVisible_Müsait(false);
  };

  const menuItems_Room = ['1+1', '2+1', '3+1', '4+1', '5+1', 'Others'];
  const handleMenuItemPressRoom = (item) => {
    setSelectedItemRoom(item);
    setVisible_Room(false);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    setSelectedDate(date);
    hideDatePicker();
  };

  const [selectedItemAge, setSelectedItemAge] = useState('');
  const [selectedItemRoom, setSelectedItemRoom] = useState('');
  const [selectedItemMüsait, setSelectedItemMüsait] = useState('');

  const [group1, setGroup1] = useState('');
  const [group2, setGroup2] = useState('');
  const [group3, setGroup3] = useState('');
  const [group4, setGroup4] = useState('');
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [identity, setIdentity] = useState('')
  const [address, setAddress] = useState('')

  const [people, setPeople] = useState('')
  const [available, setAvailable] = useState('')
  const [explanation, setExplanation] = useState('')
  const [price, setPrice] = useState('')

  const [visibleSehir, setVisibleSehir] = useState(false);
  const [visibleIlce, setVisibleIlce] = useState(false);

  const [city, setCity] = useState("Şehir");
  const [county, setCounty] = useState("İlçe");

  const [visible_Age, setVisible_Age] = useState(false);
  const [visible_Room, setVisible_Room] = useState(false);
  const [visible_Müsaitlik, setVisible_Müsait] = useState(false);

  const [counties, setCounties] = useState();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const openSehirMenu = () => setVisibleSehir(true);
  const closeSehirMenu = () => setVisibleSehir(false);
  const openIlceMenu = () => setVisibleIlce(true);
  const closeIlceMenu = () => setVisibleIlce(false);

  const openAge_Menu = () => setVisible_Age(true);
  const closeAge_Menu = () => setVisible_Age(false);

  const openRoom_Menu = () => setVisible_Room(true);
  const closeRoom_Menu = () => setVisible_Room(false);

  const openMüsaitlik_Menu = () => setVisible_Müsait(true);
  const closeMüsaitlik_Menu = () => setVisible_Müsait(false);
  return (
    <Provider>
      <ScrollView>
        <View style={styles.Let_House_View}>
          <SvgUri
            style={{ backgroundColor: '#f4f4f4' }}
            width="100%"
            height="10%"
            uri="https://s0.shbdn.com/assets/blob/icisleri-afad-logo:8126635244752126e7fdfd9455591f09.svg"
          />
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: '10%', marginBottom: '5%' }}>Evim Yuvan Olsun kampanyası ile siz de destek olun</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '5%', marginLeft: '2%' }}>Depremzede ailelerin kullanımı için:</Text>
          <RadioButton.Group onValueChange={value => setGroup1(value)} value={group1}>
            <RadioButton.Item label="Evimi en az 3 ay süre ile BEDELSİZ tahsis etmek istiyorum." value="first" />
            <RadioButton.Item label="Evimi 1 yıl süre ile indirimli bedelle KİRAYA VERMEK istiyorum." value="second" />
          </RadioButton.Group>

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '5%', marginLeft: '2%' }}>Destekte bulunacak kişi:</Text>
          <RadioButton.Group onValueChange={value => setGroup2(value)} value={group2}>
            <RadioButton.Item label="Gerçek kişi" value="first" />
            <RadioButton.Item label="Tüzel kişi" value="second" />
          </RadioButton.Group>

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '5%', marginLeft: '2%' }}>İletişim Bilgileriniz</Text>

          <TextInput style={styles.Let_House_Input} placeholder="Adınız"
            value={firstname}
            onChangeText={txt => setFirstname(txt)}
          />
          <TextInput style={styles.Let_House_Input} placeholder="Soyadınız"
            value={surname}
            onChangeText={txt => setSurname(txt)} />
          <TextInput style={styles.Let_House_Input} placeholder="Telefon"
            keyboardType='phone-pad'
            maxLength={11}
            value={phone}
            onChangeText={handlePhoneNumberChange}
          />
          <TextInput style={styles.Let_House_Input} placeholder="Mail"
            value={email}
            onChangeText={txt => setEmail(txt)}
          />
          <TextInput style={styles.Let_House_Input} placeholder="Kimlik No"
            keyboardType='phone-pad'
            value={identity}
            onChangeText={handleIdentityChange}
          />

          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '5%', marginLeft: '2%' }}>Eve ait bilgiler</Text>
          <Menu
            visible={visibleSehir}
            contentStyle={styles.Let_House_Menu_Inside}
            onDismiss={closeSehirMenu}
            anchor={<Button style={styles.Let_House_Button} onPress={openSehirMenu}>{city}</Button>}>
            {cities && cities.map(item => {
              return (<Menu.Item key={item.il} onPress={() => {
                setCounties(item.ilceler)
                setCity(item.il)
                closeSehirMenu()
              }} title={item.il} />)
            })}
          </Menu>
          <Menu
            visible={visibleIlce}
            contentStyle={styles.Let_House_Menu_Inside}
            onDismiss={closeIlceMenu}
            anchor={<Button style={styles.Let_House_Button} onPress={openIlceMenu}>{county}</Button>}>
            {counties && counties.map(item => {
              return (<Menu.Item key={item} onPress={() => {
                setCounty(item)
                closeIlceMenu()
              }} title={item} />)
            })}
          </Menu>
          <TextInput style={styles.Let_House_Input} placeholder="Adres"
            value={address}
            onChangeText={txt => setAddress(txt)}
          />
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: '5%', marginLeft: '2%' }}> Konut tipi</Text>
          <RadioButton.Group onValueChange={value => setGroup3(value)} value={group3}>
            <RadioButton.Item label="Apartman dairesi" value="first" />
            <RadioButton.Item label="Müstakil ev" value="second" />
          </RadioButton.Group>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: '2%' }}> Eşya Durumu</Text>
          <RadioButton.Group onValueChange={value => setGroup4(value)} value={group4}>
            <RadioButton.Item label="Eşyalı" value="first" />
            <RadioButton.Item label="Eşyasız" value="second" />
          </RadioButton.Group>
          <Menu
            visible={visible_Age}
            onDismiss={closeAge_Menu}
            anchor={<Button style={styles.Let_House_Button} onPress={openAge_Menu}>
              {selectedItemAge === '' ? 'Bina yaşı' : selectedItemAge}
            </Button>}
          >
            {menuItems_Age.map((item, index) => (
              <Menu.Item
                key={index}
                title={item}
                onPress={() => handleMenuItemPressAge(item)}
              />
            ))}
          </Menu>

          <Menu
            visible={visible_Room}
            onDismiss={closeRoom_Menu}
            anchor={
              <Button style={styles.Let_House_Button} onPress={openRoom_Menu}>
                {selectedItemRoom === '' ? 'Oda sayısı' : selectedItemRoom}
              </Button>
            }
          >
            {menuItems_Room.map((item, index) => (
              <Menu.Item
                key={index}
                title={item}
                onPress={() => handleMenuItemPressRoom(item)}
              />
            ))}
          </Menu>

          <TextInput style={styles.Let_House_Input} placeholder="Evde Kalabilecek kişi sayısı"
            value={people}
            onChangeText={txt => setPeople(txt)}
          />


          <TouchableOpacity style={styles.let_house_touchable} onPress={showDatePicker}>
            <Text>
              {selectedDate
                ? `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
                : "Evin müsait olduğu başlangıç tarihi"}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <Menu
            visible={visible_Müsaitlik}
            onDismiss={closeMüsaitlik_Menu}
            anchor={<Button style={styles.Let_House_Button} onPress={openMüsaitlik_Menu}>
              {selectedItemMüsait === '' ? 'Müsaitlik Süresi (AY)' : selectedItemMüsait}
            </Button>}
          >
            {menuItems_Müsaitlik.map((item, index) => (
              <Menu.Item
                key={index}
                title={item}
                onPress={() => handleMenuItemPressMüsait(item)}
              />
            ))}
          </Menu>

          <TextInput style={styles.Let_House_Input} placeholder="Açıklama"
            value={explanation}
            onChangeText={txt => setExplanation(txt)}
          />
          <TextInput style={styles.Let_House_Input} placeholder="Aylık Kira Fiyatı"
            value={price}
            onChangeText={txt => setPrice(txt)}
          />


          <TouchableOpacity style={styles.Let_House_Send} onPress={set}>
            <Text> Gönder </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Provider>
  )
}


export default Let_House