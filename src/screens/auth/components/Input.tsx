import { Input, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  inputRef?:
    | React.MutableRefObject<any>
    | ((instance: any) => void)
    | undefined;
};

export function MainInput({ inputRef, ...rest }: Props) {
  return (
    <FormControl>
      <Input
        {...rest}
        w={'90%'}
        color={'dark.100'}
        bg={'#FAFAFA'}
        borderColor={'#E1E1E1'}
        borderWidth={1}
        py={3}
        rounded={'md'}
        fontSize={'sm'}
        ref={inputRef}
        _focus={{
          borderColor: 'main.100',
          borderWidth: '1px',
        }}
      />
    </FormControl>
  );
}
