import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'
import { UserPhoto } from "@components/UserPhoto";
import UserDefaultPhoto from '@assets/userPhotoDefault.png'
import { TouchableOpacity } from "react-native";
export function HomeHeader() {
  return (
    <HStack
      bg="gray.600"
      pt={16}
      px={8}
      pb={5}
      alignItems='center'

    >
      <UserPhoto mr={4} size={16} source={{ uri: "https://github.com/bsvleste.png" }} alt="foto do usuario" />
      <VStack flex={1}>
        <Text color='gray.100' fontSize='md' fontFamily={'heading'}>Ola</Text>
        <Heading
          color='gray.100'
          fontSize='md'
          fontFamily={'heading'}>
          Bruno
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color='gray.200'
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}