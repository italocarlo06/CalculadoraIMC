import { Button as NativeButton, Heading} from 'native-base';


export function Button({ title, ... rest}){
    return (
        <NativeButton
          bg="green.700"
          h={14}
          fontSize="sm"
          rounded="sm"
          _pressed={{ bg:"green_500"}}
          {...rest}
        >
          <Heading color="white" fontSize="sm">
            {title}
          </Heading>
        </NativeButton>
    )
}