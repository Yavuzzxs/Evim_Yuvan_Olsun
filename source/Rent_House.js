import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles";
import { Button, Menu, Provider, Modal, } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';

import cities from '../city';

import { ScrollView } from 'react-native-gesture-handler';

import { collection, query, where, onSnapshot, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from '../config';
import { uuidv4 } from '@firebase/util';

const Rent_House = () => {


    const set = async () => {
        alert("Başvurunuz Kaydedildi")
        const uid = uuidv4()

        await setDoc(doc(db, "Depremzedeler", uid), {

            ad: firstname,
            soyad: surname,
            il: city,
            ilce: county,
            adres: address,
            telefon: phone,
            kimlikno: identity,
            vatandaslik: uyruk,
            cinsiyet: gender,
            öncelikdurum: isselectedDisabled,
            öncelikdurum2: isselectedOrphan,
            öncelikdurum3: isselectedPregnant,
            il2: city2,
            ilce2: county2,
            address2: address2,

        });
    }



    const navigation = useNavigation()

    const [gender, setGender] = useState("Cinsiyet...");
    const [visibleGender, setVisibleGender] = useState(false);

    const openGender_Menu = () => setVisibleGender(true);
    const closeGender_Menu = () => setVisibleGender(false);

    const handleSelect = (selectedGender) => {
        setGender(selectedGender); // Seçilen cinsiyeti state'e kaydet
        closeGender_Menu();
    }
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

    const [visibleUyruk, setVisibleUyruk] = useState(false);
    const [uyruk, setUyruk] = useState("Seçiniz...")

    const [identity, setIdentity] = useState('')
    const [firstname, setFirstname] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [visibleSehir, setVisibleSehir] = useState(false);
    const [visibleIlce, setVisibleIlce] = useState(false);
    const [visibleSehir2, setVisibleSehir2] = useState(false);
    const [visibleIlce2, setVisibleIlce2] = useState(false);

    const [city, setCity] = useState("Şehir");
    const [county, setCounty] = useState("İlçe");
    const [city2, setCity2] = useState("Şehir");
    const [county2, setCounty2] = useState("İlçe");

    const [counties, setCounties] = useState();
    const [counties2, setCounties2] = useState();
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');


    const openSehirMenu = () => setVisibleSehir(true);
    const closeSehirMenu = () => setVisibleSehir(false);
    const openSehirMenu2 = () => setVisibleSehir2(true);
    const closeSehirMenu2 = () => setVisibleSehir2(false);
    const openIlceMenu = () => setVisibleIlce(true);
    const closeIlceMenu = () => setVisibleIlce(false);
    const openIlceMenu2 = () => setVisibleIlce2(true);
    const closeIlceMenu2 = () => setVisibleIlce2(false);
    const openUyruk = () => setVisibleUyruk(true);
    const closeUyruk = () => setVisibleUyruk(false);


    const [isselectedPregnant, setSelectionPregnant] = useState(false);
    const [isselectedOrphan, setSelectionOrphan] = useState(false);
    const [isselectedDisabled, setSelectionDisabled] = useState(false);


    const [inputs, setInputs] = useState([{ id: 0, name: '', surname: '', menuVisible: false, selectedItem: '' }]);
    const [idCounter, setIdCounter] = useState(1);

    const handleAddInput = () => {
        const newInputs = [...inputs];
        newInputs.push({ id: idCounter, name: '', surname: '', menuVisible: false, selectedItem: '' });
        setInputs(newInputs);
        setIdCounter(idCounter + 1);
    };

    const handleInputChange = (index, field, value) => {
        const newInputs = [...inputs];
        newInputs[index][field] = value.toString();
        setInputs(newInputs);
    };

    const handleMenuOpen = (index) => {
        const newInputs = [...inputs];
        newInputs[index].menuVisible = true;
        setInputs(newInputs);
    };

    const handleMenuClose = (index) => {
        const newInputs = [...inputs];
        newInputs[index].menuVisible = false;
        setInputs(newInputs);
    };

    const handleMenuItemSelect = (item, index) => {
        const newInputs = [...inputs];
        newInputs[index].selectedItem = item;
        newInputs[index].menuVisible = false;
        setInputs(newInputs);
    };
    return (
        <Provider>
            <ScrollView>
                <View style={styles.Rent_House_View}>
                    <Image style={[styles.image_afad, { backgroundColor: '#F4F4F4' }]}
                        source={{ uri: 'https://depremzede.icisleri.gov.tr/css/AFAD-_-Icisleri-Bkn.png' }}
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginBottom: '5%' }}>Evim Yuvan Olsun kampanyası ile siz de destek olun</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'left', }}>Genel Bilgiler</Text>
                    <Menu
                        visible={visibleUyruk}
                        onDismiss={closeUyruk}
                        anchor={<Button style={styles.Rent_House_Menu} onPress={openUyruk}>{uyruk}</Button>}>
                        <Menu.Item onPress={() => { setUyruk('T.C.'); closeUyruk(); }} title="T.C." />
                        <Menu.Item onPress={() => { setUyruk('Diğer'); closeUyruk(); }} title="Diğer" />
                    </Menu>
                    <TextInput style={styles.Rent_House_Input} placeholder="Kimlik No"
                        keyboardType='phone-pad'
                        value={identity}
                        onChangeText={handleIdentityChange}
                    />
                    <TextInput style={styles.Rent_House_Input} placeholder="Adınız"
                        value={firstname}
                        onChangeText={txt => setFirstname(txt)}
                    />
                    <TextInput style={styles.Rent_House_Input} placeholder="Soyadınız"
                        value={surname}
                        onChangeText={txt => setSurname(txt)} />
                    <TextInput style={styles.Rent_House_Input} placeholder="Telefon"
                        keyboardType='phone-pad'
                        maxLength={11}
                        value={phone}
                        onChangeText={handlePhoneNumberChange}
                    />
                    <Menu
                        visible={visibleGender}
                        onDismiss={closeGender_Menu}
                        anchor={<Button style={styles.Rent_House_Menu} onPress={openGender_Menu}>{gender}</Button>}

                    >
                        <Menu.Item onPress={() => handleSelect('Erkek')} title="Erkek" />
                        <Menu.Item onPress={() => handleSelect('Kadın')} title="Kadın" />
                    </Menu>

                    <CheckBox
                        title="Hamile mi?"
                        style={styles.Rent_House_Checkbox}
                        checked={isselectedPregnant}
                        checkedColor='red'
                        containerStyle={{ backgroundColor: 'white', width: '80%' }}
                        onPress={() => setSelectionPregnant(!isselectedPregnant)}
                    />
                    <CheckBox
                        title="Dul/Yetim mi?"
                        style={styles.Rent_House_Checkbox}
                        checked={isselectedOrphan}
                        checkedColor='red'
                        containerStyle={{ backgroundColor: 'white', width: '80%' }}
                        onPress={() => setSelectionOrphan(!isselectedOrphan)}
                    />

                    <CheckBox
                        title="Engelli mi?"
                        style={styles.Rent_House_Checkbox}
                        checked={isselectedDisabled}
                        checkedColor='red'
                        containerStyle={{ backgroundColor: 'white', width: '80%' }}
                        onPress={() => setSelectionDisabled(!isselectedDisabled)}
                    />

                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'left', marginTop: '5%' }}>Mevcut Adres Bilgileri</Text>
                    <Menu
                        visible={visibleSehir}
                        contentStyle={styles.Rent_House_Menu_Inside}
                        onDismiss={closeSehirMenu}
                        anchor={<Button style={styles.Rent_House_Button} onPress={openSehirMenu}>{city}</Button>}>
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
                        contentStyle={styles.BookingBuRent_House_Menu_InsidettonInside}
                        onDismiss={closeIlceMenu}
                        anchor={<Button style={styles.Rent_House_Button} onPress={openIlceMenu}>{county}</Button>}>
                        {counties && counties.map(item => {
                            return (<Menu.Item key={item} onPress={() => {
                                setCounty(item)
                                closeIlceMenu()
                            }} title={item} />)
                        })}
                    </Menu>
                    <TextInput style={styles.Rent_House_Input} placeholder="Adres"
                        value={address}
                        onChangeText={txt => setAddress(txt)}
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'left', marginTop: '5%' }}>İkamet Adres Bilgileri</Text>
                    <Menu
                        visible={visibleSehir2}
                        contentStyle={styles.Rent_House_Menu_Inside}
                        onDismiss={closeSehirMenu2}
                        anchor={<Button style={styles.Rent_House_Button} onPress={openSehirMenu2}>{city2}</Button>}>
                        {cities && cities.map(item => {
                            return (<Menu.Item key={item.il} onPress={() => {
                                setCounties2(item.ilceler)
                                setCity2(item.il)
                                closeSehirMenu2()
                            }} title={item.il} />)
                        })}
                    </Menu>
                    <Menu
                        visible={visibleIlce2}
                        contentStyle={styles.Rent_House_Menu_Inside}
                        onDismiss={closeIlceMenu2}
                        anchor={<Button style={styles.Rent_House_Button} onPress={openIlceMenu2}>{county2}</Button>}>
                        {counties2 && counties2.map(item => {
                            return (<Menu.Item key={item} onPress={() => {
                                setCounty2(item)
                                closeIlceMenu2()
                            }} title={item} />)
                        })}
                    </Menu>
                    <TextInput style={styles.Rent_House_Input} placeholder="Adres"
                        value={address2}
                        onChangeText={txt => setAddress2(txt)}
                    />
                    <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'left', marginTop: '5%' }}>Beraber Konaklayacak Kişi Bilgileri</Text>
                    <View>
                        {inputs.map((input, index) => (
                            <View key={input.id}>
                                
                                <TextInput
                                    style={styles.Rent_House_Input2}
                                    placeholder="T.C. Kimlik No/Passport No"
                                    value={input.identity}
                                    onChangeText={(value) => handleInputChange(index, 'identity', value)}
                                />

                                <TextInput
                                    style={styles.Rent_House_Input2}
                                    placeholder="Ad"
                                    value={input.name}
                                    onChangeText={(value) => handleInputChange(index, 'name', value)}
                                />
                                <TextInput
                                    style={styles.Rent_House_Input2}
                                    placeholder="Soyad"
                                    value={input.surname}
                                    onChangeText={(value) => handleInputChange(index, 'surname', value)}
                                />
                                <Menu
                                    visible={input.menuVisible}
                                    anchor={<Button style={styles.Rent_House_Button} onPress={() => handleMenuOpen(index)}>{input.selectedItem || 'Seçiniz...'}{ }</Button>}
                                    onDismiss={() => handleMenuClose(index)}
                                >
                                    <Menu.Item onPress={() => handleMenuItemSelect('Çocuk', index)} title="Çocuk" />
                                    <Menu.Item onPress={() => handleMenuItemSelect('Eş', index)} title="Eş" />
                                    <Menu.Item onPress={() => handleMenuItemSelect('Anne', index)} title="Anne" />
                                    <Menu.Item onPress={() => handleMenuItemSelect('Baba', index)} title="Baba" />
                                    <Menu.Item onPress={() => handleMenuItemSelect('Diğer Akraba', index)} title="Diğer Akraba" />
                                    <Menu.Item onPress={() => handleMenuItemSelect('Aileden Değil', index)} title="Aileden Değil" />
                                </Menu>
                            </View>
                        ))}

                    </View>
                    <Button style={styles.Let_House_Button} onPress={handleAddInput}>Kişi ekle</Button>
                    <Button style={styles.Let_House_Button} onPress={set}>Başvuru Kaydet</Button>
                </View>
            </ScrollView>
        </Provider>
    )

}

export default Rent_House