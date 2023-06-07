import { Heading, HStack} from 'native-base';


export function Header({ title, ...rest}) {
    
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}      
      {...rest}
    >  
        <Heading color="gray.100" fontSize="lg" textAlign="center" flex={1} >
            {title}
        </Heading>
    </HStack>
  );
}
