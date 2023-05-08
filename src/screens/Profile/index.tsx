import { useState } from "react";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { Alert, TouchableOpacity } from "react-native";
import { Center, ScrollView, Text, VStack, Skeleton, Heading, useToast } from "native-base";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

const PHOTO_SIZE = 33
export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState('https://github.com/bsvleste.png')
  const toast = useToast()
  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true)
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4],
      });
      if (photoSelected.canceled) {
        return
      }
      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)
        if (photoInfo.size && (photoInfo.size / 1024 / 1024) > 3) {
          return toast.show({
            title: "Está imagem é muito grande.Escolha uma imagem de até 3MB",
            placement: 'top',
            bgColor: "red.500",
          })
        }
        setUserPhoto(photoSelected.assets[0].uri)
      }
    } catch (error) {
      toast.show({
        title: "Ops! Não foi possivel carregar a foto",
        placement: 'top',
        bgColor: "red.500",
      })
    } finally {
      setPhotoIsLoading(false)
    }
  }
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
                source={{ uri: userPhoto }}
                alt="foto do usario"
                size={33}
              />
          }
          <TouchableOpacity
            onPress={handleUserPhotoSelect}
          >
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
            fontFamily={'heading'}
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