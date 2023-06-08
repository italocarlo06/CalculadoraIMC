import { Image } from 'react-native';
import { useTheme, VStack } from 'native-base';
import Form from '../Form'
import { Header } from "../Header"

const Main = () => {
    const { colors } = useTheme()

    return (

        <VStack bg={colors.gray[600]} flex={1} alignItems="center" justifyContent={"center"} pt={24} >
            <Header title={"Calculadora IMC"} />
            <Image source={require('../../../assets/logo.png')}
                style={{
                    width: 80,
                    height: 80
                }}
            />
            <Form />
        </VStack>
    )
}

export default Main