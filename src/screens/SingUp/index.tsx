import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundOImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  function handleNavigateToSignIn() {
    navigation.navigate('signIn')
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
          alt='pessoal malhando'
          source={BackgroundOImg}
          defaultSource={BackgroundOImg}
        />
        <Header />
        <Center >
          <Heading
            color="gray.100"
            fontSize='xl'
            mb={6}
            fontFamily='heading'>
            Crie sua conta
          </Heading>
        </Center>
        <Center mb={6}>
          <Input placeholder='Nome' />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none' />
          <Input placeholder='Password' secureTextEntry />
          <Button title='Criar e acessar' />
        </Center>
        <Button title='Voltar para o login' variant='outline' mt='12' onPress={handleNavigateToSignIn} />
      </VStack>
    </ScrollView>
  )
}