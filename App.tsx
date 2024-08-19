import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const textInputRef = useRef<TextInput>(null)

  const resetButton = () => {
    if(textInputRef.current){
      textInputRef.current.setNativeProps({
        text: ""
      })
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} ref={textInputRef}/>
      <Button title='RESETAR' onPress={resetButton}/>
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
  input: {
    height: 40,
    width: '80%',
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
    marginBottom: 10,
  },
});
