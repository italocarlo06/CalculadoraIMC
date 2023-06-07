import { View} from 'react-native';
import { useTheme, VStack, Icon } from 'native-base';
import { Input } from "../Input";
import { Button  } from "../Button";
import { Ruler, Scales } from 'phosphor-react-native';

/*
import { Ruler, Scales } from 'phosphor-react-native';
InputLeftElement={<Icon as={<Scales color={colors.gray[300]} />} ml={4} />}
                    InputLeftElement={<Icon as={<Ruler color={colors.gray[300]} />} ml={4} />}*/

const Form = ()=>{    
    const { colors } = useTheme();
    return ( 
        <VStack bg={"gray.600"} px={6} flex={1}  roundedTopLeft={"xl"} roundedTopRight={"xl"}>
            <View >
                
                
                <Input 
                   placeholder="Altura" 
                    mt={4}
                    keyboardType='numeric'
                    InputLeftElement={<Icon as={<Ruler color={colors.gray[300]} />} size={10} ml={4} />}
                />
                <Input 
                   placeholder="Peso" 
                    mt={4}
                    keyboardType='numeric'
                    InputLeftElement={<Icon as={<Scales color={colors.gray[300]} />} size={10} ml={4} />}
                />                
                                
                <Button title='CALCULAR' mt={5}/>
            </View>
        </VStack>
    )
}



export default Form