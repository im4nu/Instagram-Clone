import { Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

interface AuthFooterProps {
  title: string;
  link?: string;
}

export function AuthFooter({ title, link }: AuthFooterProps) {
  return (
    <VStack borderTopColor={'gray.200'} py={4} borderTopWidth={1} w={'full'}>
      <TouchableOpacity>
        <Text
          textAlign={'center'}
          justifyContent={'center'}
          color={'gray.500'}
          fontSize={'xs'}
        >
          {title}{' '}
          <Text bold color={'dark'}>
            {link}
          </Text>
        </Text>
      </TouchableOpacity>
    </VStack>
  );
}
