import { VStack, Image, Text, Center, Heading } from 'native-base'
import BackgroundOImg from '@assets/background.png'
import GymLogoSVG from '@assets/logo.svg'
import { Input } from '@components/Input'
export function SignIn() {
  return (
    <VStack
      px={5}
      flex={1}
      bg='gray.700'
    >
      <Image
        position="absolute"
        resizeMode='contain'
        alt='pessoal malhando'
        source={BackgroundOImg}
      />
      <Center my={24}>
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
      <Input
        placeholder='E-mail'
        keyboardType='email-address'
        autoCapitalize='none' />
      <Input placeholder='Password' />
    </VStack>
  )
}