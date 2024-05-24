import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',}}
      >
      <Text style={{fontSize:24}}>My name is </Text>
    <View>
<Text  style={{fontWeight:"bold",fontSize:24}}>
Emmanuel Adu Bransah
</Text>


    </View>
      <StatusBar style="auto" />
    </View>
  );
}
