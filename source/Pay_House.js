import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles";
import { Button, Menu, Provider, Modal, Checkbox } from 'react-native-paper';

import cities from '../city';

import { ScrollView } from 'react-native-gesture-handler';
const Pay_House = () => {
  const navigation = useNavigation();

  const [isselectedPregnant, setIsSelectedPregnant] = useState(false);
  const [isselectedOrphan, setIsSelectedOrphan] = useState(false);
  const [isselectedDisabled, setIsSelectedDisabled] = useState(false);

  const onSelectionChangePregnant = (newValue) => {
    setIsSelectedPregnant(newValue);
  };

  const onSelectionChangeOrphan = (newValue) => {
    setIsSelectedOrphan(newValue);
  };

  const onSelectionChangeDisabled = (newValue) => {
    setIsSelectedDisabled(newValue);
  };

  return (
    <View>
      <Checkbox style={styles.Rent_House_Checkbox}
        value={isselectedPregnant}
        onValueChange={(newValue) => onSelectionChangePregnant(newValue)}
      />
      <Text> Hamile mi? </Text>
      <Checkbox style={styles.Rent_House_Checkbox}
        value={isselectedOrphan}
        onValueChange={(newValue) => onSelectionChangeOrphan(newValue)}
      />
      <Text> Dul/Yetim mi? </Text>
      <Checkbox style={styles.Rent_House_Checkbox}
        value={isselectedDisabled}
        onValueChange={(newValue) => onSelectionChangeDisabled(newValue)}
      />
    </View>
  );
};

export default Pay_House