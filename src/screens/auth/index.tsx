import { Avatar, Image, Text, VStack } from 'native-base';
import { MainButton } from '../../components/Button';
import { TouchableOpacity } from 'react-native';
import InstaLogo from '../../assets/images/instaLogo.png';
import Profile from '../../assets/images/profile.jpg';
import { useNavigation } from '@react-navigation/native';
import { AuthFooter } from './components/Footer';

export function Auth() {
  const navigation = useNavigation();
  return (
    <VStack bg={'#fff'} flex={1} justifyContent={'space-between'}>
      <VStack
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
        px={'10%'}
      >
        <Image
          width={182}
          height={49}
          source={InstaLogo}
          alt="Logomarca Instagram"
        />

        <VStack mt={12} alignItems={'center'} justifyContent={'center'}>
          <Avatar source={Profile} size={105} />
          <Text py={4} color={'dark.100'}>
            @arrozkofeijao
          </Text>
          <MainButton
            onPress={() => navigation.navigate('Login')}
            _pressed={{ backgroundColor: 'main.200' }}
            px={32}
            title="Entrar"
            bg={'main.100'}
          />
          <TouchableOpacity>
            <Text fontSize={'xs'} py={4} color={'main.100'}>
              Trocar Conta
            </Text>
          </TouchableOpacity>
        </VStack>
      </VStack>

      <AuthFooter title="Não possui conta?" link="Crie uma." />
    </VStack>
  );
}
