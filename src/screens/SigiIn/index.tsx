import { Platform, KeyboardAvoidingView } from 'react-native'
import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import BackgroundOImg from '@assets/background.png'
import GymLogoSVG from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        px={5}
        flex={1}
        bg='gray.700'
        pb={16}
      >
        <Image
          position="absolute"
          resizeMode='contain'
          alt='pessoal malhando'
          source={BackgroundOImg}
        />
        <Center my={16}>
          <GymLogoSVG />
          <Text
            color='gray.100'
            fontSize='sm'
            fontFamily='body'>
            Treine sua mente e seu corpo
          </Text>
        </Center>
        <Center>
          <Heading
            color="gray.100"
            fontSize='xl'
            mb={6}
            fontFamily='heading'>
            Acesse sua conta
          </Heading>
        </Center>
        <Center>
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none' />
          <Input placeholder='Password' secureTextEntry />
          <Button title='Acessar' />
        </Center>
        <Center mt={24}>
          <Text
            color='gray.100'
            fontFamily='body'
            fontSize='sm'
            mb={3}>
            Ainda não Tem Acesso?</Text>
          <Button title='Acessar' variant='outline' />
        </Center>
      </VStack>
    </ScrollView>
  )
}