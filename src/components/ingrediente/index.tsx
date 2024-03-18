import { Image, Pressable, PressableProps, Text } from "react-native";
import {styles} from './styles';

export type IngredienteProps = {
    name: String,
    imagem: String,
    selecionado?: boolean
}

export default function Ingrediente({name, imagem, selecionado= false, ...rest}: IngredienteProps & PressableProps){
    return(
        <Pressable style={selecionado? styles.selecionado : styles.container} {...rest} >
            <Image style={styles.image} source={require("@/images/apple.png")} />
            <Text  style={styles.title}> Maça</Text>
        </Pressable>
    )
}