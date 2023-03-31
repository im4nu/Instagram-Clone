import React from 'react';
import { HStack, Image, Text, VStack, View } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import InstaLogo from '../../../assets/images/instaLogo.png';
import { TouchableOpacity } from 'react-native';
import { MainButton } from '../../../components/Button';
import { AuthFooter } from '../components/Footer';
import { MainInput } from '../components/Input';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();
  return (
    <VStack
      bg={'#fff'}
      flex={1}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <VStack>
        <HStack w={'full'} justifyContent={'flex-start'}>
          <TouchableOpacity
            style={{ padding: 24 }}
            onPress={() => navigation.navigate('Auth')}
          >
            <Entypo name="chevron-thin-left" size={24} color={'#000'} />
          </TouchableOpacity>
        </HStack>

        <VStack h={'80%'} alignItems={'center'} justifyContent={'space-evenly'}>
          <Image
            width={182}
            height={49}
            source={InstaLogo}
            alt="Logomarca Instagram"
          />

          <VStack>
            <MainInput
              placeholder="arrozkofeijao"
              placeholderTextColor={'dark.100'}
              my={2}
            />
            <MainInput
              placeholder="Senha"
              placeholderTextColor={'gray.400'}
              my={2}
            />
            <TouchableOpacity
              style={{
                minWidth: '90%',
                alignItems: 'flex-end',
              }}
            >
              <Text fontSize={'xs'} color={'main.100'}>
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
          </VStack>

          <MainButton
            title="Entrar"
            bg={'main.100'}
            px={32}
            _pressed={{ backgroundColor: 'main.200' }}
          />

          <TouchableOpacity>
            <HStack alignItems={'center'}>
              <Entypo name="facebook" size={24} color={'#3797EF'} />
              <Text bold pl={2} color={'main.100'}>
                Continuar com o facebook
              </Text>
            </HStack>
          </TouchableOpacity>

          <HStack
            w={'full'}
            alignItems={'center'}
            justifyContent={'space-around'}
          >
            <View
              borderBottomColor={'gray.300'}
              borderBottomWidth={1}
              w={'35%'}
            />
            <Text bold color={'gray.400'}>
              Ou
            </Text>
            <View
              borderBottomColor={'gray.300'}
              borderBottomWidth={1}
              w={'35%'}
            />
          </HStack>

          <TouchableOpacity>
            <Text
              textAlign={'center'}
              justifyContent={'center'}
              color={'gray.500'}
            >
              Não possui uma conta? <Text color={'main.100'}>Cadastrar-se</Text>
            </Text>
          </TouchableOpacity>
        </VStack>
      </VStack>

      <AuthFooter title="Desenvolvido por Facebook" />
    </VStack>
  );
}
