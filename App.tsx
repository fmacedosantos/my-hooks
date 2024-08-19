import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [quantity, setQuantity] = useState<number>(1)
  const [price, setPrice] = useState<number>(10.9)
  const basePrice = 10.9

  const addNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1
      setPrice(basePrice * newQuantity)
      return newQuantity
    })
  }

  const removeNumber = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1
      setPrice(basePrice * newQuantity)
      return newQuantity
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button title='-' onPress={removeNumber}/>
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title='+' onPress={addNumber}/>
      </View>
      <Text>R${price}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLabel: {
    fontSize: 22,
    marginHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
  },
});
