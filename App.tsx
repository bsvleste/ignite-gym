import { Text, View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })

  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor='trasnparent'
        translucent
      />
      {fontsLoaded ? <Text>Heelo word</Text> : <View />}
    </View>
  );
}

