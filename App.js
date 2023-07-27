import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,Button,Alert, Switch,SafeAreaView, TextInput} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Image style={styles.image} 
      source={{
        uri:'https://i.pinimg.com/originals/f3/7b/52/f37b5273252024d60d9bb5c73bccd627.png'
      }}
      />
      
      <Text style={styles.text1}>This is our planet</Text>
      <Text style={{fontSize:32,textAlign:'center',padding:20}}>What do you think about it? does it always look like it was before? No</Text>
      <Button
        title="Continue"
        onPress={() => Alert.alert('Simple Button pressed')}
       />
       <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
    <Button
        title="Login"
        onPress={() => Alert.alert('You have successfully login')}
       />
       <Text style={{marginTop:10,fontSize:22}}>Building an app is amazing</Text>
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
  text1:{
    fontSize:50
  },
  image:{
    width:400,
    height:400
  },
  input: {
    width:380,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});


