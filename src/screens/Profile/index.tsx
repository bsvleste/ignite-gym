import { Center, ScrollView, Text, VStack, Skeleton, Heading } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={'8'} px={'10'}>
          {
            photoIsLoading ?
              <Skeleton
                startColor={'gray.500'}
                endColor={'gray.600'}
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded={'full'} />
              :
              <UserPhoto
                source={{ uri: "https://github.com/bsvleste.png" }}
                alt="foto do usario"
                size={33}
              />
          }
          <TouchableOpacity>
            <Text
              color={'green.500'}
              fontWeight={'bold'}
              fontSize={'md'}
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input
            placeholder="Nome"
            bg={"gray.600"}
          />
          <Input
            isDisabled
            placeholder="email"
            bg={"gray.600"}
          />
        </Center>
        <VStack
          px={10}
          mt={12}
          mb={9}
        >
          <Heading
            color={'gray.200'}
            fontSize={'md'}
            mb={2}
          >
            Alterar Senha
          </Heading>
          <Input
            bg={'gray.600'}
            placeholder="Senha Antiga"
            type='password'
          />
          <Input
            bg={'gray.600'}
            placeholder="Nova Senha"
            type='password'
          />
          <Input
            bg={'gray.600'}
            placeholder="Confirmar Senha"
            type='password'
          />
          <Button title="Atualizar" />
        </VStack>
      </ScrollView>
    </VStack>
  )
}