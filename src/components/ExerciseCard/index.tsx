import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons"
type ExerciseCardProps = TouchableOpacityProps & {

}
export function ExerciseCard({ ...props }: ExerciseCardProps) {
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
          source={{ uri: 'https://www.smartfit.com.br/news/wp-content/uploads/2021/09/remada-curvada-como-fazer-800x533.jpg' }}
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
          >
            Remada unilatreal
          </Heading>
          <Text
            fontSize={'sm'}
            color={'gray.200'}
            mt={1}
            numberOfLines={2}
          >
            3 series x 12 repetições
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