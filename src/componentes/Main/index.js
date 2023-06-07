import {View} from 'react-native';
import { useTheme, VStack, Image } from 'native-base';
import Form from '../Form'
import { Header } from "../Header"

const logo= require('../../../assets/logo.png');

const Main = ()=>{
    
    const { colors } = useTheme()
    return(
        <VStack bg={colors.gray[600]}  flex={1} alignItems="center">                   
            <Header title={"Calculadora IMC"} />
            <Image
                source={{ uri: logo }}
                width={50}
                height={50}
               />
            <Form/>
        </VStack>
    )
}

export default  Main