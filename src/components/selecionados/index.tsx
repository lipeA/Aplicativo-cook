import { Text, View } from "react-native";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated"; // animação do popup dos selecionados
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from './styles'
import { theme } from "@/theme";
import { Button } from "../Button";

type SelecionadosProps = {
    quantidade: number,
    onClear: ()=> void,
    onSearch: ()=>void
}


export default function Selecionados({quantidade, onClear, onSearch}: SelecionadosProps){
    return(
        <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
            <View style={styles.header}>
                <Text style={styles.label}> {quantidade} ingredientes selecionados </Text>
                <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400} />

            </View>
          <Button title="Encontrar" onPress={onSearch}></Button>
        </Animated.View>
    );
}