import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundOImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  function handleNavigateToSignUp() {
    navigation.navigate("signUp")
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        px={5}
        flex={1}
        pb={16}
      >
        <Image
          position="absolute"
          resizeMode='contain'
          source={BackgroundOImg}
          defaultSource={BackgroundOImg}
          alt='pessoal malhando'
        />
        <Header />
        <Center>
          <Heading
            color="gray.100"
            fontSize='xl'
            mb={6}
            fontFamily='heading'>
            Acesse sua conta
          </Heading>
        </Center>
        <Center mb={6}>
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none' />
          <Input placeholder='Password' secureTextEntry />
          <Button title='Acessar' />
        </Center>
        <Center mt={16}>
          <Text
            color='gray.100'
            fontFamily='body'
            fontSize='sm'
            mb={3}>
            Ainda não tem acesso?</Text>
          <Button
            title='Criar
            conta'
            variant='outline'
            onPress={handleNavigateToSignUp} />
        </Center>
      </VStack>

    </ScrollView>
  )
}