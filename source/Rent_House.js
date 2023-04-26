import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles";
import { Button, Menu, Provider, Modal, } from 'react-native-paper';
import { CheckBox } from 'react-native-elements';

import cities from '../city';

import { ScrollView } from 'react-native-gesture-handler';


const Rent_House = () => {
    const navigation = useNavigation()

    const [gender, setGender] = useState("Cinsiyet...");
    const [visibleGender, setVisibleGender] = useState(false);

    const openGender_Menu = () => setVisibleGender(true);
    const closeGender_Menu = () => setVisibleGender(false);

    const handleSelect = (selectedGender) => {
        setGender(selectedGender); // Seçilen cinsiyeti state'e kaydet
        closeGender_Menu(); // Menüyü kapat
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


    const [inputs, setInputs] = useState([{ id: '', name: '', surname: '', relation: null }]);

    const relations = ['Çocuk', 'Eş', 'Anne', 'Baba', 'Diğer', 'Aile Dışı'].map(String);

    const addPerson = () => {
        setInputs([...inputs, { id: '', name: '', surname: '', relation: null }]);
    };

    const handleSave = () => {
        //bilgileri  kaydetmek için
        console.log(inputs);
        setInputs([{ id: '', name: '', surname: '', relation: null }]);
    };

    const handleInputChange = (index, name, value) => {
        const newInputs = [...inputs];
        newInputs[index][name] = value;
        setInputs(newInputs);
    };

    const handleRelationSelect = (index, relationIndex) => {
        const newInputs = [...inputs];
        newInputs[index] = { relation: relationIndex };
        setInputs(newInputs);
    };
    return (
        <Provider>
            <ScrollView>

                <View style={styles.Rent_House_View}>
                    <Text style={{ fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop: '10%', marginBottom: '5%' }}>Evim Yuvan Olsun kampanyası ile siz de destek olun</Text>
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
                        containerStyle={{backgroundColor:'white',width:'80%'}}
                        onPress={() => setSelectionPregnant(!isselectedPregnant)}
                    />
                    <CheckBox
                        title="Dul/Yetim mi?"
                        style={styles.Rent_House_Checkbox}
                        checked={isselectedOrphan}
                        checkedColor='red'
                        containerStyle={{backgroundColor:'white',width:'80%'}}
                        onPress={() => setSelectionOrphan(!isselectedOrphan)}
                    />

                    <CheckBox
                        title="Engelli mi?"
                        style={styles.Rent_House_Checkbox}
                        checked={isselectedDisabled}
                        checkedColor='red'
                        containerStyle={{backgroundColor:'white',width:'80%'}}
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
                    {inputs.map((input, index) => (
                        <View style={styles.Rent_House_View} key={index}>
                            <TextInput style={styles.Rent_House_Input}
                                placeholder="T.C. Kimlik No/Passport No"
                                value={input.id}
                                keyboardType='phone-pad'
                                onChangeText={(value) => handleInputChange(index, 'id', value)}
                            />

                            <TextInput style={styles.Rent_House_Input}
                                placeholder="Ad"
                                value={input.name}
                                onChangeText={(value) => handleInputChange(index, 'name', value)}
                            />
                            <TextInput style={styles.Rent_House_Input}
                                placeholder="Soyad"
                                value={input.surname}
                                onChangeText={(value) => handleInputChange(index, 'surname', value)}
                            />
                            <Menu
                                visible={inputs[index].relation !== null}
                                onDismiss={() => handleRelationSelect(index, null)}
                                anchor={<Button style={styles.Rent_House_Menu} onPress={() => handleRelationSelect(index, 0)}>Çocuk/Eş/Anne/Baba/Aileden Değil</Button>}

                            >
                                {relations.map((relation, relationIndex) => (
                                    <Menu.Item
                                        key={relationIndex}
                                        onPress={() => {
                                            handleRelationSelect(index, relationIndex);
                                        }}
                                        title={relation}
                                    />
                                ))}
                            </Menu>

                        </View>
                    ))}
                    <Button style={styles.Let_House_Button} onPress={addPerson}>+</Button>
                    <Button style={styles.Let_House_Button} onPress={handleSave}>Başvuru Kaydet</Button>
                </View>
            </ScrollView>
        </Provider>
    )

}

export default Rent_House