import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button,Alert } from 'react-native';

export default function App() {
 
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
  }
});

