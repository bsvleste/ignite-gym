import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons"
import { UserDTO } from "@dtos/UserDTO";
import { ExerciseDTO } from "@dtos/ExercisesDTO";
import { api } from "@services/api";
type ExerciseCardProps = TouchableOpacityProps & {
  data: ExerciseDTO
}
export function ExerciseCard({ data, ...props }: ExerciseCardProps) {

  return (
    <TouchableOpacity {...props}>
      <HStack
        bg={'gray.500'}
        alignItems={'center'}
        p={2}
        pr={4}
        rounded={'md'}
        mb={4}
      >
        <Image
          source={{ uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}` }}
          alt="remada lateral"
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          resizeMode={"cover"}
        />
        <VStack flex={1}>
          <Heading
            fontSize={'lg'}
            color={'white'}
            fontFamily={'heading'}
          >
            {data.name}
          </Heading>
          <Text
            fontSize={'sm'}
            color={'gray.200'}
            mt={1}
            numberOfLines={2}
          >
            {data.series} séries x {data.repetitions}
          </Text>
        </VStack>
        <Icon
          color={"gray.300"}
          as={Entypo}
          name='chevron-thin-right'
        />
      </HStack>
    </TouchableOpacity>
  )
}