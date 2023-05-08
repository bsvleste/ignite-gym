import { Box, HStack, Heading, Icon, Image, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg'
import RepetitionSvg from '@assets/repetitions.svg'
import { Button } from "@components/Button";

export function Exercise() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>()
  function handleGoBack() {
    goBack()
  }
  return (
    <VStack flex={1}>
      <VStack
        px={8}
        bg={'gray.600'}
        pt={12} >
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name='arrow-left' color={"green.500"} size={6} />
        </TouchableOpacity>
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          mt={4}
          mb={8}
        >
          <Heading
            flexShrink={1}
            color={'gray.100'}
            fontSize={'lg'}
            fontFamily={'heading'}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems={'center'}>
            <BodySvg />
            <Text
              color={'gray.200'}
              ml={1}
              textTransform={'capitalize'}
            >
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack
          p={8}
        >

          <Image
            w={'full'}
            h={80}
            source={{ uri: 'https://www.smartfit.com.br/news/wp-content/uploads/2021/09/remada-curvada-como-fazer-800x533.jpg' }}
            alt="Exemplo do exercicio"
            mb={3}
            resizeMode="cover"
            rounded={'lg'}
          />
          <Box bg={'gray.600'} rounded={'md'} pb={4} px={4}>
            <HStack
              mt={5}
              mb={6}
              justifyContent={'space-around'}
              alignItems={'center'}>
              <HStack>
                <SeriesSvg />
                <Text color={'gray.200'} ml={2}>3 séries</Text>
              </HStack>
              <HStack>
                <RepetitionSvg />
                <Text color={'gray.200'} ml={2}>12 repetisões</Text>
              </HStack>
            </HStack>
            <Button title='Marcar como realizado' />
          </Box>
        </VStack>
      </ScrollView>
    </VStack >
  )
}