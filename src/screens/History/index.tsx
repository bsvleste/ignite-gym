import { useState } from 'react';
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, VStack, SectionList, Text, Center } from "native-base";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export function History() {
  const [exercicses, setExercises] = useState([
    {
      title: "12/05/2023",
      data: ['Puxada Frontal', 'Remada unilateral']
    },
    {
      title: "14/05/2023",
      data: ['Panturrilha', 'Bumbum']
    }
  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title="Historico de Treino" />
      <SectionList
        sections={exercicses}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard title={item} />
        )}
        renderSectionHeader={({ section }) => (
          <Heading
            color={"gray.100"}
            fontSize={"md"}
            mt={'10'}
            mb={'3'}
            fontFamily={'heading'}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={[].length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <VStack mt={'16'}>
            <Center>
              <MaterialCommunityIcons name="weight-lifter" size={64} color={'white'} />
              <Text color={'gray.100'} textAlign={'center'} fontSize={'md '}>
                Não Há exercicios registrados ainda.Vamos treinar hoje?
              </Text>
            </Center>
          </VStack>
        )}
      />
    </VStack>
  )
}