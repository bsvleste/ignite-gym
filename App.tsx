import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider, Box } from 'native-base';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: "#202424" }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded ? <Box>Heelo world</Box> : <View />}
      </View>
    </NativeBaseProvider>
  );
}

